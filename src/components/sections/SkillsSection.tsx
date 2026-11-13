import { skillGroups } from "#/content/skills";

/**
 * Habilidades por lugar onde foram usadas. Quem tem logo vira adesivo com ícone;
 * quem não tem vira etiqueta de rotuladora, na mesma lista.
 */
export function SkillsSection() {
	return (
		<section
			id="habilidades"
			className="ed-dark ed-skills"
			aria-labelledby="hab-t"
		>
			<div className="ed-wrap">
				<h2 id="hab-t" className="hd ed-h2">
					Com o que eu <span className="cw">trabalho</span>
				</h2>
				<ul className="ed-rows">
					{skillGroups.map((g) => (
						<li key={g.title} className="ed-row">
							<h3 className="hd">{g.title}</h3>
							<ul aria-label={g.label} className="ed-stickers">
								{g.items.map((s) =>
									s.icon ? (
										<li key={s.name} className="ed-sticker">
											<svg
												viewBox="0 0 24 24"
												width="30"
												height="30"
												aria-hidden="true"
												focusable="false"
											>
												<path
													d={s.icon}
													fill="currentColor"
													fillRule={s.evenodd ? "evenodd" : undefined}
												/>
											</svg>
											{s.name}
										</li>
									) : (
										<li key={s.name} className="rot ed-label">
											{s.name}
										</li>
									),
								)}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
