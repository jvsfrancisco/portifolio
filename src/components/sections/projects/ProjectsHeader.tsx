export function ProjectsHeader() {
	return (
		<div className="g12" style={{ alignItems: "end", rowGap: "32px" }}>
			<div style={{ gridColumn: "1 / 7" }}>
				<h2
					id="projetos-t"
					className="hd"
					style={{ margin: "0 0 16px", fontSize: "clamp(40px, 5vw, 64px)" }}
				>
					Um projeto <span className="cw">por vez</span>
				</h2>
				<p style={{ margin: "0", fontSize: "18px", color: "#4E4840" }}>
					Cada projeto é uma linha. Abra para ver os recortes e o que eu fiz.
				</p>
			</div>
			<div style={{ gridColumn: "8 / 13", justifySelf: "end" }}>
				<p className="tira nm-m" style={{ margin: "0", "--r": "1deg" }}>
					antes disso: Driven, PUC-Rio, ITShare e MDM, no{" "}
					<a
						href="#trajeto"
						style={{
							display: "inline-flex",
							alignItems: "center",
							minHeight: "44px",
						}}
					>
						trajeto lá embaixo
					</a>
				</p>
			</div>
		</div>
	);
}
