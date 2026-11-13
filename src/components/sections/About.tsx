import { useRef, useState } from "react";
import { Magnet } from "#/components/collage/Magnet";
import { DragCut } from "#/components/motion/DragCut";
import { about, azzasShots, azzasShotsCaption } from "#/content/profile";

/** Inclinação de cada recorte, na ordem de `azzasShots`. A posição fica no CSS (.ed-cut-N). */
const TILTS = [-1.5, 5, 2, -2.5, 1.5];

export function About() {
	const board = useRef<HTMLDivElement>(null);
	/** ordem na pilha por recorte; o último tocado recebe o maior número */
	const [stack, setStack] = useState<Record<string, number>>({});
	const top = useRef(10);
	const raise = (src: string) => {
		top.current += 1;
		const z = top.current;
		setStack((s) => ({ ...s, [src]: z }));
	};
	return (
		<section id="sobre" className="ed-about" aria-labelledby="sobre-t">
			<div className="ed-wrap ed-about-grid">
				<div>
					<h2 id="sobre-t" className="hd ed-h2">
						Sobre <span className="cw">mim</span>
					</h2>
					<p className="ed-about-lead">{about.lead}</p>
					{about.paragraphs.map((p) => (
						<p key={p} className="ed-about-p">
							{p}
						</p>
					))}
				</div>

				<div>
					<div ref={board} className="ed-board">
						{azzasShots.map((shot, i) => (
							<DragCut
								key={shot.src}
								className={`ed-cut ed-cut-${i + 1}`}
								tilt={TILTS[i] ?? 0}
								bounds={board}
								z={stack[shot.src]}
								onRaise={() => raise(shot.src)}
							>
								<img
									src={shot.src}
									width={shot.width}
									height={shot.height}
									alt={shot.alt}
									loading="lazy"
									decoding="async"
									draggable={false}
								/>
								<figcaption>{shot.label}</figcaption>
								<Magnet icon="toucan" />
							</DragCut>
						))}
					</div>
					<p className="tira ed-board-cap">{azzasShotsCaption}</p>
				</div>
			</div>
		</section>
	);
}
