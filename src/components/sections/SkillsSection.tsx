import { Tape } from "#/components/collage/Tape";
import { skillGroups } from "#/content/skills";

export function SkillsSection() {
	return (
		<section
			id="skills"
			aria-labelledby="skills-t"
			style={{ paddingTop: "96px", position: "relative" }}
		>
			<div className="g12" style={{ rowGap: "32px", alignItems: "end" }}>
				<div style={{ gridColumn: "1 / 8" }}>
					<h2
						id="skills-t"
						className="hd"
						style={{ margin: 0, fontSize: "clamp(40px, 5vw, 64px)" }}
					>
						Skills, <span className="cw">e onde usei</span>
					</h2>
					<p className="tira" style={{ margin: "24px 0 0", "--r": "-1deg" }}>
						agrupadas pelo lugar onde cada uma foi parar
					</p>
				</div>
				<div
					className="sk sheet quad skt"
					style={{ gridColumn: "1 / 13", transform: "rotate(-0.3deg)" }}
				>
					<Tape side="left" at="12%" tilt={-4} washi width="90px" />
					<Tape side="right" at="10%" tilt={5} />
					{skillGroups.map((group) => (
						<div className="skr" key={group.title}>
							<h3 className="skr-h">{group.title}</h3>
							{group.kind === "icons" ? (
								<ul className="st-l" aria-label={group.label}>
									{group.items.map((item) => (
										<li
											className="st"
											key={item.name}
											style={{ "--r": `${item.tilt ?? 0}deg` }}
										>
											<span className="gl" aria-hidden="true">
												<svg
													viewBox="0 0 24 24"
													focusable="false"
													aria-hidden="true"
												>
													<path d={item.icon} />
												</svg>
											</span>
											<b>{item.name}</b>
										</li>
									))}
								</ul>
							) : (
								<ul className="tags" aria-label={group.label}>
									{group.items.map((item) => (
										<li className="rot" key={item.name}>
											{item.name}
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
