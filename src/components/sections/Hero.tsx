import { cvHref, profile, summary } from "#/content/profile";

export function Hero() {
	return (
		<section
			id="topo"
			className="g12"
			style={{ paddingTop: "56px", paddingBottom: "72px", rowGap: "48px" }}
		>
			<div
				className="h-name"
				style={{ gridColumn: "1 / 8", position: "relative" }}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "24px",
						marginBottom: "32px",
					}}
				>
					<span
						className="round"
						style={{
							position: "relative",
							display: "block",
							flex: "0 0 auto",
							width: "96px",
							overflow: "hidden",
							transform: "rotate(-3deg)",
							filter: "var(--sombra)",
						}}
					>
						<img
							src={profile.photo.src}
							width={284}
							height={284}
							alt={profile.photo.alt}
							style={{
								display: "block",
								width: "100%",
								height: "auto",
								transform: "scale(1.04)",
							}}
						/>
					</span>
					<p className="tira" style={{ margin: 0, "--r": "1deg" }}>
						{profile.photo.caption}
					</p>
				</div>
				<h1
					className="hd h1"
					style={{
						margin: 0,
						fontSize: "clamp(58px, 8vw, 104px)",
						lineHeight: 0.9,
						letterSpacing: "-0.035em",
					}}
				>
					{profile.name[0]}
					<br />
					{profile.name[1]}
				</h1>
				<p
					className="lede"
					style={{
						margin: "32px 0 0",
						maxWidth: "620px",
						fontSize: "25px",
						lineHeight: 1.35,
						fontWeight: 560,
						letterSpacing: "-0.015em",
						color: "#141210",
					}}
				>
					{profile.role}
				</p>
				<p
					className="lede2"
					style={{
						margin: "16px 0 0",
						maxWidth: "600px",
						fontSize: "19px",
						lineHeight: 1.55,
						color: "#4E4840",
					}}
				>
					Estágio na Azzas 2154, grupo dono da FARM Rio, onde trabalho no
					e-commerce das marcas do grupo. E tenho a Quazz, consultoria de sites
					e sistemas para pequenos negócios, que toco em parceria. O primeiro
					sistema, o caixa e financeiro de uma loja de biquínis, está no ar com
					mais de R$&nbsp;15 mil em vendas.
				</p>
			</div>

			<aside
				className="h-30 sheet quad"
				aria-labelledby="v30"
				style={{
					gridColumn: "8 / 13",
					alignSelf: "start",
					marginTop: "8px",
					padding: "32px 32px 32px",
					transform: "rotate(0.8deg)",
				}}
			>
				<span
					className="fita wa"
					aria-hidden="true"
					style={{ top: "-12px", left: "38%", "--tr": "-3deg", "--tw": "96px" }}
				/>
				<span className="rot" style={{ "--r": "-1.5deg" }}>
					Versão de 30 segundos
				</span>
				<h2
					id="v30"
					className="hd"
					style={{
						margin: "16px 0 16px",
						fontSize: "30px",
						lineHeight: 1.05,
						letterSpacing: "-0.04em",
					}}
				>
					O resumo, se você tem pressa
				</h2>
				<ul className="okl">
					{summary.map((line) => (
						<li key={line.id}>
							{line.text}
							{line.link && (
								<>
									{" "}
									<a
										href={line.link.href}
										style={{
											display: "inline-flex",
											alignItems: "center",
											minHeight: "44px",
											fontWeight: 650,
										}}
									>
										{line.link.label}
									</a>
								</>
							)}
						</li>
					))}
				</ul>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "8px",
						marginTop: "24px",
					}}
				>
					<a href={cvHref} download className="pill cv">
						CV em PDF
					</a>
					<a href="#contato" className="pill" style={{ background: "#FFFDF8" }}>
						Fala comigo
					</a>
				</div>
			</aside>
		</section>
	);
}
