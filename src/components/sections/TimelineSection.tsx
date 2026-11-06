import { Tape } from "#/components/collage/Tape";
import { timeline, timelineYears } from "#/content/timeline";

export function TimelineSection() {
	return (
		<section
			id="trajeto"
			aria-labelledby="trajeto-t"
			style={{ paddingTop: "96px", position: "relative" }}
		>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "flex-end",
					justifyContent: "space-between",
					gap: "16px 24px",
					marginBottom: "32px",
				}}
			>
				<h2
					id="trajeto-t"
					className="hd"
					style={{ margin: 0, fontSize: "clamp(40px, 5vw, 64px)" }}
				>
					Trajeto, <span className="cw">ano a ano</span>
				</h2>
				<p className="tira" style={{ margin: "0 0 8px", "--r": "1.4deg" }}>
					a mesma história, numa agenda de anos
				</p>
			</div>
			<div className="sheet quad cal">
				<Tape side="left" at="8%" tilt={-4} />
				<Tape side="right" at="9%" tilt={5} />
				<div className="cal-h" aria-hidden="true">
					{timelineYears.map((year) => (
						<span key={year}>{year}</span>
					))}
				</div>
				<div className="cal-f">
					<ol className="cal-b">
						{timeline.map((ev) => (
							<li
								key={ev.id}
								className={["ev", ...ev.variants].join(" ")}
								style={{
									"--c": ev.col,
									"--rw": ev.row,
									"--r": `${ev.tilt}deg`,
								}}
							>
								{ev.tape && <Tape {...ev.tape} />}
								{ev.label ? (
									<>
										<b className="rot" style={{ "--r": "-1deg" }}>
											{ev.title}
										</b>
										<br />
									</>
								) : (
									<b>{ev.title}</b>
								)}
								{ev.body} <span className="dt">{ev.period}</span>
								<span
									className="bar"
									aria-hidden="true"
									style={{
										"--n": ev.bar.n,
										"--ini": ev.bar.ini,
										"--fim": ev.bar.fim,
									}}
								/>
							</li>
						))}
					</ol>
				</div>
				<span className="hoje" aria-hidden="true">
					<span className="rot" style={{ "--r": "-3deg" }}>
						hoje
					</span>
				</span>
			</div>
		</section>
	);
}
