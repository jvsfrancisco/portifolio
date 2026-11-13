import { useEffect, useRef, useState } from "react";
import { Magnet } from "#/components/collage/Magnet";
import { DragCut } from "#/components/motion/DragCut";
import type { Project } from "#/content/types";

/** Inclinação de cada tela, na ordem das imagens do projeto. A posição fica no CSS (.ed-shot-N). */
const TILTS = [-1.5, 3, -2.5, 2, 4, -4];

/**
 * Um projeto no carrossel. Todo slide tem a mesma ordem: etiqueta, nome, resumo, stack e, por último,
 * o recibo de números ou o link. As telas são recortes presos com ímã: dá para arrastar para qualquer
 * ponto do slide, até por cima do texto, e a última tocada fica por cima.
 */
export function ProjectSlide({
	project,
	index,
	active,
}: {
	project: Project;
	index: number;
	active: boolean;
}) {
	const titleId = `proj-${project.id}`;
	const links = project.links ?? (project.link ? [project.link] : []);
	const slide = useRef<HTMLLIElement>(null);
	const [stack, setStack] = useState<Record<string, number>>({});
	const top = useRef(10);
	/** painel do texto longo: abre por cima da coluna de texto e rola por dentro, sem mudar a altura do card */
	const [more, setMore] = useState(false);
	const moreHead = useRef<HTMLHeadingElement>(null);
	const moreBtn = useRef<HTMLButtonElement>(null);
	useEffect(() => {
		if (!active) setMore(false);
	}, [active]);
	useEffect(() => {
		if (more) moreHead.current?.focus();
	}, [more]);
	const closeMore = () => {
		setMore(false);
		moreBtn.current?.focus();
	};
	const moreId = `mais-${project.id}`;
	const raise = (src: string) => {
		top.current += 1;
		const z = top.current;
		setStack((s) => ({ ...s, [src]: z }));
	};

	return (
		<li
			ref={slide}
			className={`ed-slide${active ? " is-active" : ""}`}
			role="group"
			aria-roledescription="slide"
			aria-labelledby={titleId}
			aria-hidden={!active}
			inert={!active}
		>
			<div className="ed-slide-tx">
				{project.more && more && (
					<section
						id={moreId}
						className="ed-more"
						aria-labelledby={`${moreId}-t`}
						onKeyDown={(e) => {
							if (e.key === "Escape") {
								e.stopPropagation();
								closeMore();
							}
							// as setas leem o texto; não trocam de slide
							if (e.key === "ArrowLeft" || e.key === "ArrowRight")
								e.stopPropagation();
						}}
					>
						<div className="ed-more-head">
							<h4 id={`${moreId}-t`} ref={moreHead} tabIndex={-1}>
								{project.title}
							</h4>
							<button type="button" onClick={closeMore}>
								Fechar
							</button>
						</div>
						{project.more.groups.map((g) => (
							<div key={g.heading} className="ed-more-group">
								<h5>{g.heading}</h5>
								{g.points && (
									<ul className="ed-points">
										{g.points.map((p) => (
											<li key={p}>{p}</li>
										))}
									</ul>
								)}
								{g.stories?.map((st) => (
									<article key={st.title}>
										<h6>{st.title}</h6>
										<p>{st.body}</p>
									</article>
								))}
							</div>
						))}
						{project.more.note && (
							<p className="ed-note">{project.more.note}</p>
						)}
					</section>
				)}
				<p className="ed-kind">
					<span className="rot">{project.kind}</span>
				</p>
				<h3 id={titleId} className="hd ed-slide-title">
					{project.title}
				</h3>
				<p className="ed-slide-sum">{project.summary}</p>

				<ul className="ed-stack" aria-label={`Stack de ${project.title}`}>
					{project.stack.map((s) => (
						<li key={s}>{s}</li>
					))}
				</ul>

				{project.metrics && (
					<div className="recibo ed-receipt">
						<span className="rh" aria-hidden="true">
							# {project.title}, em números
						</span>
						<dl>
							{project.metrics.map((m) => (
								<div key={m.value}>
									<dt>{m.value}</dt>
									<dd>{m.label}</dd>
								</div>
							))}
						</dl>
					</div>
				)}

				{project.more && (
					<button
						ref={moreBtn}
						type="button"
						className="ed-more-btn"
						aria-expanded={more}
						aria-controls={moreId}
						onClick={() => setMore(true)}
					>
						{project.more.label}
						<span aria-hidden="true">+</span>
					</button>
				)}

				{links.length > 0 && (
					<div className="ed-project-links">
						{links.map((link) => (
							<a
								key={link.href}
								className="ed-link"
								href={link.href}
								target="_blank"
								rel="noopener"
							>
								{link.label}
								<span aria-hidden="true"> ↗</span>
							</a>
						))}
					</div>
				)}
			</div>

			<div className="ed-slide-mo">
				{project.images.map((img, i) => (
					<DragCut
						key={img.src}
						className={`ed-shot ed-shot-${i + 1}`}
						tilt={TILTS[i] ?? 0}
						bounds={slide}
						z={stack[img.src]}
						onRaise={() => raise(img.src)}
					>
						<img
							src={img.src}
							width={img.width}
							height={img.height}
							alt={img.alt}
							loading={index === 0 && i === 0 ? "eager" : "lazy"}
							decoding="async"
							draggable={false}
						/>
						<Magnet icon="quazz" />
					</DragCut>
				))}
			</div>
		</li>
	);
}
