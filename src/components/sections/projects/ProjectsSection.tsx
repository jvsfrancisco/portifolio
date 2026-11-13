import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "#/content/projects";
import { ProjectSlide } from "./ProjectSlide";

/** Seta traçada, com a ponta aberta, no lugar das setas de texto. */
function Arrow({ dir }: { dir: "left" | "right" }) {
	return (
		<svg
			viewBox="0 0 28 14"
			width="26"
			height="13"
			fill="none"
			stroke="currentColor"
			strokeWidth="2.4"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
			style={dir === "left" ? { transform: "scaleX(-1)" } : undefined}
		>
			<path d="M2 7h23M19 1.5 25 7l-6 5.5" />
		</svg>
	);
}
const total = projects.length;

/**
 * Carrossel de projetos: um slide por vez, com a altura do conteúdo, deslizando com mola.
 * Os botões e o contador ficam no topo, sempre no mesmo lugar. Dá para trocar pelas setas da tela,
 * pelas setas do teclado ou arrastando para o lado.
 */
export function ProjectsSection() {
	const [active, setActive] = useState(0);
	const reduce = useReducedMotion();
	const current = projects[active];
	const track = useRef<HTMLUListElement>(null);
	const [slideHeight, setSlideHeight] = useState<number>();
	useEffect(() => {
		const slide = track.current?.children[active];
		if (!(slide instanceof HTMLElement)) return;
		const update = () => setSlideHeight(slide.offsetHeight);
		update();
		const observer = new ResizeObserver(update);
		observer.observe(slide);
		return () => observer.disconnect();
	}, [active]);
	/** verdadeiro quando o gesto começou num recorte: aí é arrasto de papel, não troca de slide */
	const onShot = useRef(false);

	const go = useCallback(
		(n: number) => setActive(Math.max(0, Math.min(total - 1, n))),
		[],
	);

	return (
		<section
			id="projetos"
			className="ed-dark ed-projects"
			aria-labelledby="projetos-t"
		>
			<div className="ed-wrap">
				<div
					className="ed-carousel"
					role="region"
					aria-roledescription="carousel"
					aria-label="Projetos"
					onKeyDown={(e) => {
						if (e.key === "ArrowRight") go(active + 1);
						if (e.key === "ArrowLeft") go(active - 1);
					}}
				>
					<div className="ed-carousel-head">
						<h2 id="projetos-t" className="hd ed-h2">
							Projetos <span className="cw">que fiz</span>
						</h2>
						<div className="ed-arrows">
							<button
								type="button"
								onClick={() => go(active - 1)}
								disabled={active === 0}
								aria-label="Projeto anterior"
							>
								<Arrow dir="left" />
							</button>
							<button
								type="button"
								onClick={() => go(active + 1)}
								disabled={active === total - 1}
								aria-label="Próximo projeto"
							>
								<Arrow dir="right" />
							</button>
						</div>
					</div>
					<p className="ed-sr" aria-live="polite">
						{current?.title}, projeto {active + 1} de {total}
					</p>

					<ol className="ed-progress" aria-label="Ir para o projeto">
						{projects.map((p, i) => (
							<li key={p.id}>
								<button
									type="button"
									onClick={() => go(i)}
									aria-label={`${p.title}, ${i + 1} de ${total}`}
									aria-current={i === active ? "true" : undefined}
								>
									<span>{p.title}</span>
								</button>
							</li>
						))}
					</ol>

					<div className="ed-viewport">
						<motion.ul
							ref={track}
							className="ed-track"
							style={{ height: slideHeight }}
							initial={false}
							animate={{ x: `${-active * 100}%` }}
							transition={
								reduce
									? { duration: 0 }
									: { type: "spring", stiffness: 190, damping: 28, mass: 0.9 }
							}
							onPanStart={(e) => {
								onShot.current = Boolean(
									(e.target as Element | null)?.closest?.(".ed-shot"),
								);
							}}
							onPanEnd={(_, info) => {
								if (onShot.current) return;
								if (Math.abs(info.offset.x) < Math.abs(info.offset.y)) return;
								if (info.offset.x < -60 || info.velocity.x < -500)
									go(active + 1);
								else if (info.offset.x > 60 || info.velocity.x > 500)
									go(active - 1);
							}}
						>
							{projects.map((p, i) => (
								<ProjectSlide
									key={p.id}
									project={p}
									index={i}
									active={i === active}
								/>
							))}
						</motion.ul>
					</div>
				</div>
			</div>
		</section>
	);
}
