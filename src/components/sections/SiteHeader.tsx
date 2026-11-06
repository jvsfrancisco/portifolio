import { cvHref, nav, profile } from "#/content/profile";

export function SiteHeader() {
	return (
		<>
			<a href="#projetos" className="skip">
				Pular para os projetos
			</a>
			<header>
				<nav
					className="wrap"
					aria-label="Seções"
					style={{
						display: "flex",
						gap: "8px 16px",
						alignItems: "center",
						justifyContent: "space-between",
						paddingTop: "16px",
						paddingBottom: "16px",
					}}
				>
					<a
						href="#topo"
						className="navlink hd"
						style={{
							paddingLeft: 0,
							fontSize: "22px",
							color: "#141210",
							letterSpacing: "-0.04em",
							whiteSpace: "nowrap",
						}}
					>
						{profile.navName}
					</a>
					<div
						style={{
							display: "flex",
							gap: "4px 4px",
							alignItems: "center",
							fontSize: "16px",
						}}
					>
						{nav.map((item) => (
							<a key={item.href} href={item.href} className="navlink nv">
								{item.label}
							</a>
						))}
						<a
							href={cvHref}
							download
							className="pill"
							style={{
								marginLeft: "8px",
								minHeight: "44px",
								fontSize: "16px",
								padding: "0 16px",
								whiteSpace: "nowrap",
							}}
						>
							CV em PDF
						</a>
					</div>
				</nav>
			</header>
		</>
	);
}
