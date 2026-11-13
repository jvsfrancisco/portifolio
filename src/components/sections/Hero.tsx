import { SwingBadge } from "#/components/motion/SwingBadge";
import { badge, cvHref, profile } from "#/content/profile";

export function Hero() {
	return (
		<section id="topo" className="ed-hero" aria-labelledby="hero-t">
			<div className="ed-wrap ed-hero-grid">
				<div className="ed-hero-tx">
					<h1 id="hero-t" className="hd ed-name">
						{profile.name[0]} <span className="cw">{profile.name[1]}</span>
					</h1>
					<p className="ed-lead">{profile.role}</p>
					<div className="ed-actions">
						<a href={cvHref} download className="pill cv">
							CV em PDF
						</a>
						<a href="#contato" className="pill">
							Fala comigo
						</a>
					</div>
				</div>

				<aside
					className="ed-badge"
					aria-label="Crachá de João Victor Francisco"
				>
					<SwingBadge>
						<div className="ed-badge-card">
							<span className="ed-badge-slot" aria-hidden="true" />
							{/* a foto original é redonda; o crachá mostra o recorte 3x4 de dentro do círculo */}
							<span className="ed-badge-photo">
								<img
									src={profile.photo.src}
									width={284}
									height={284}
									alt={profile.photo.alt}
									draggable={false}
								/>
							</span>
							<p className="hd ed-badge-name">{profile.navName}</p>
							<dl>
								{badge.map((r) => (
									<div key={r.label}>
										<dt>{r.label}</dt>
										<dd>{r.value}</dd>
									</div>
								))}
							</dl>
						</div>
					</SwingBadge>
				</aside>
			</div>
		</section>
	);
}
