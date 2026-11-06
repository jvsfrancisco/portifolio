import { contact, cvHref } from "#/content/profile";

const dashed = "1.5px dashed rgba(20, 18, 16, 0.35)";

export function SiteFooter() {
	return (
		<footer
			id="contato"
			style={{ marginTop: "80px", borderTop: "1px solid #E2DBCC" }}
		>
			<div
				className="wrap g12"
				style={{
					paddingTop: "56px",
					paddingBottom: "80px",
					rowGap: "40px",
					alignItems: "end",
				}}
			>
				<div className="foot-a" style={{ gridColumn: "1 / 7" }}>
					<h2
						className="hd"
						style={{
							margin: 0,
							fontSize: "clamp(56px, 8vw, 104px)",
							lineHeight: 0.92,
						}}
					>
						Fala <span className="cw">comigo.</span>
					</h2>
					<p
						className="tira"
						style={{ margin: "24px 0 0 4px", "--r": "-1.4deg" }}
					>
						o e-mail é o caminho mais curto
					</p>
				</div>
				<div
					className="foot-b sheet kraft"
					style={{
						gridColumn: "7 / 13",
						padding: "16px 24px 24px",
						transform: "rotate(-0.6deg)",
					}}
				>
					<span
						className="fita"
						aria-hidden="true"
						style={{ top: "-13px", left: "12%", "--tr": "-5deg" }}
					/>
					<span
						className="fita wa"
						aria-hidden="true"
						style={{ top: "-13px", right: "12%", "--tr": "6deg" }}
					/>
					<ul
						style={{
							margin: 0,
							padding: 0,
							listStyle: "none",
							fontSize: "19px",
							fontWeight: 600,
						}}
					>
						{contact.map((c) => (
							<li key={c.href} style={{ borderBottom: dashed }}>
								<a
									href={c.href}
									{...(c.external ? { rel: "noopener" } : {})}
									style={{
										display: "flex",
										alignItems: "center",
										minHeight: "56px",
										textDecoration: "none",
										overflowWrap: "anywhere",
									}}
								>
									{c.label}
								</a>
							</li>
						))}
					</ul>
					<a
						href={cvHref}
						download
						className="pill cv"
						style={{ marginTop: "24px" }}
					>
						CV em PDF
					</a>
				</div>
			</div>
		</footer>
	);
}
