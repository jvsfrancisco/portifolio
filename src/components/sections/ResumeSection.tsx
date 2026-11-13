import { timeline } from "#/content/timeline";
import type { TimelineEvent } from "#/content/types";

function Entry({ ev }: { ev: TimelineEvent }) {
	return (
		<li className="ed-entry">
			<p className="ed-period">{ev.period}</p>
			<div>
				<h4>
					{ev.place} <span>· {ev.role}</span>
				</h4>
				<p>{ev.body}</p>
				{ev.details && (
					<details className="ed-details ed-details-light">
						<summary>{ev.details.summary}</summary>
						{ev.details.groups.map((g) => (
							<div key={g.heading}>
								<h5>{g.heading}</h5>
								<ul className="ed-points">
									{g.points.map((p) => (
										<li key={p}>{p}</li>
									))}
								</ul>
							</div>
						))}
					</details>
				)}
			</div>
		</li>
	);
}

export function ResumeSection() {
	const work = timeline.filter((e) => e.kind === "work");
	const study = timeline.filter((e) => e.kind === "study");
	return (
		<section id="curriculo" className="ed-resume" aria-labelledby="cv-t">
			<div className="ed-wrap">
				<h2 id="cv-t" className="hd ed-h2">
					Meu <span className="cw">currículo</span>
				</h2>
				<div className="ed-resume-grid">
					<div>
						<h3 className="hd ed-sub">Experiência</h3>
						<ol className="ed-list">
							{work.map((e) => (
								<Entry key={e.id} ev={e} />
							))}
						</ol>
					</div>
					<div>
						<h3 className="hd ed-sub">Formação</h3>
						<ol className="ed-list">
							{study.map((e) => (
								<Entry key={e.id} ev={e} />
							))}
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
}
