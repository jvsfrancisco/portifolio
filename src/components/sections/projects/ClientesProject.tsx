import { Collapse } from "#/components/ui/Collapse";
import type { ProjectHoles } from "./useProjectHoles";

export function ClientesProject({ h }: { h: ProjectHoles }) {
	return (
		<div className="pj">
			<button
				type="button"
				className="px"
				style={{ "--pr": "-.4deg" }}
				onClick={h.pickPjCli}
				aria-expanded={h.pjCliExp}
			>
				<span className="rot" style={{ "--r": "1.2deg" }}>
					Quazz · clientes
				</span>
				<span className="px-t">Sites de clientes</span>
				<span className="px-m">
					<span className="px-d">
						Três sites para pequenos negócios, todos em Next.js com Tailwind.
					</span>
					<span className="px-g">
						<span className="rot">Next.js</span>
						<span className="rot">Tailwind</span>
					</span>
				</span>
				<span className="ht">{h.pjCliHint}</span>
			</button>
			<Collapse open={h.pjCliOpen}>
				<section
					id="clientes"
					aria-labelledby="cli-t"
					style={{ marginTop: "88px" }}
				>
					<div className="g12" style={{ rowGap: "32px", alignItems: "start" }}>
						<div
							className="hd-s sheet corte"
							style={{ gridColumn: "1 / 6", transform: "rotate(-0.5deg)" }}
						>
							<span className="num ca" style={{ "--nr": "-6deg" }}>
								4
							</span>
							<span className="rot" style={{ "--r": "1.2deg" }}>
								Quazz · clientes
							</span>
							<h3 id="cli-t">Sites de clientes</h3>
							<p>
								Três sites para pequenos negócios, todos em Next.js com
								Tailwind. Cada etiqueta abre a ficha com o link.
							</p>
							<span className="tg-h nm-m">Stack</span>
							<ul
								className="tags nm-m"
								aria-label="Stack dos sites de clientes"
							>
								<li className="rot">Next.js</li>
								<li className="rot">Tailwind</li>
							</ul>
						</div>
						<div
							className="fiz sheet kraft"
							style={{
								gridColumn: "6 / 13",
								transform: "rotate(0.6deg)",
								marginTop: "8px",
							}}
						>
							<span
								className="fita"
								aria-hidden="true"
								style={{ top: "-12px", right: "18%", "--tr": "4deg" }}
							></span>
							<h4>O que eu fiz nesses sites</h4>
							<p
								style={{
									margin: "0 0 8px",
									fontSize: "15px",
									lineHeight: "1.45",
									color: "#141210",
								}}
							>
								Nem todo site tem tudo; cada ficha tem o link para conferir.
							</p>
							<ul
								className="okl chk2"
								style={{ columns: "2", columnGap: "32px" }}
							>
								<li style={{ breakInside: "avoid" }}>
									Layout responsivo e tema claro e escuro
								</li>
								<li style={{ breakInside: "avoid" }}>
									Respeito a prefers-reduced-motion
								</li>
								<li style={{ breakInside: "avoid" }}>
									Eventos de conversão no GA4
								</li>
								<li style={{ breakInside: "avoid", borderTop: "0" }}>
									Microsoft Clarity só depois do consentimento de cookies
								</li>
								<li style={{ breakInside: "avoid" }}>
									SEO com sitemap e dados estruturados
								</li>
								<li style={{ breakInside: "avoid" }}>
									API do Instagram com fallback estático
								</li>
							</ul>
						</div>
					</div>
					<p className="dica" aria-hidden="true">
						3 sites · arraste para o lado
					</p>
					<div
						className="cli faixa"
						role="region"
						aria-label="Os três sites de clientes"
					>
						<div className={`pick ${h.bemCls}`}>
							<figure
								className="board"
								onClick={h.pickBem}
								style={{ aspectRatio: "100 / 84" }}
							>
								<span
									className="pc rasg b m1"
									style={{
										"--x": "0%",
										"--y": "5%",
										"--w": "92%",
										"--r": "1.4deg",
										zIndex: "1",
									}}
								>
									<img
										src="/img/bem-desktop.jpg"
										width="1200"
										height="679"
										alt="Site da Bem Trajados no computador"
										loading="lazy"
									/>
									<span
										className="fita"
										style={{
											top: "-14px",
											right: "12%",
											"--tr": "6deg",
											"--tw": "70px",
										}}
									></span>
								</span>
								<span
									className="pc tesw"
									style={{
										"--x": "58%",
										"--y": "61%",
										"--w": "40%",
										"--r": "-3.5deg",
										"--mw": "50%",
										"--ml": "46%",
										"--mt": "-6%",
										zIndex: "3",
									}}
								>
									<span className="tes" style={{ "--b": "5px" }}>
										<img
											src="/img/bem-manchete.jpg"
											width="590"
											height="330"
											alt="Recorte da manchete do site, Os crias se destacam na BT"
											loading="lazy"
										/>
									</span>
									<span
										className="fita wa"
										style={{
											top: "-12px",
											left: "10%",
											"--tr": "-9deg",
											"--tw": "66px",
										}}
									></span>
								</span>
							</figure>
							<button
								type="button"
								className="lbl"
								style={{ "--lr": "1.6deg" }}
								onClick={h.pickBem}
								aria-expanded={h.bemExp}
							>
								<span className="nm">
									Bem Trajados{" "}
									<span style={{ whiteSpace: "nowrap" }}>· streetwear</span>
								</span>
								<span className="ht">{h.bemHint}</span>
							</button>
							<Collapse open={h.bemOpen}>
								<div
									className="ficha"
									id="ficha-bem"
									role="region"
									aria-label="Ficha da Bem Trajados"
									style={{ padding: "32px 24px 24px" }}
								>
									<h3 style={{ marginTop: "0" }}>Bem Trajados</h3>
									<p style={{ margin: "0 0 8px" }}>
										Site de uma loja de streetwear masculino em Jacaré. Fiz em
										Next.js com Tailwind.
									</p>
									<p style={{ margin: "0" }}>
										<a
											href="https://bemtrajados.quazz.com.br"
											style={{
												display: "inline-flex",
												alignItems: "center",
												minHeight: "44px",
												fontWeight: "650",
												overflowWrap: "anywhere",
											}}
										>
											Abrir bemtrajados.quazz.com.br
										</a>
									</p>
								</div>
							</Collapse>
						</div>
						<div className={`pick ${h.deleiCls}`} style={{ marginTop: "40px" }}>
							<figure
								className="board"
								onClick={h.pickDelei}
								style={{ aspectRatio: "100 / 92" }}
							>
								<span
									className="pc rasg m1"
									style={{
										"--x": "0%",
										"--y": "3%",
										"--w": "84%",
										"--r": "-1.8deg",
										zIndex: "1",
									}}
								>
									<img
										src="/img/delei-desktop.jpg"
										width="1200"
										height="750"
										alt="Site do Açaí de Lei no computador"
										loading="lazy"
									/>
									<span
										className="fita"
										style={{
											top: "-14px",
											left: "10%",
											"--tr": "-6deg",
											"--tw": "70px",
										}}
									></span>
								</span>
								<span
									className="pc tesw"
									style={{
										"--x": "72%",
										"--y": "34%",
										"--w": "26%",
										"--r": "-3deg",
										"--mw": "34%",
										"--mt": "-16%",
										zIndex: "2",
									}}
								>
									<span className="tes" style={{ "--b": "4px" }}>
										<img
											src="/img/delei-mobile.jpg"
											width="390"
											height="760"
											alt="Site do Açaí de Lei no celular"
											loading="lazy"
										/>
									</span>
								</span>
								<span
									className="pc round"
									style={{
										"--x": "8%",
										"--y": "52%",
										"--w": "40%",
										"--r": "6deg",
										"--mw": "48%",
										"--mt": "-6%",
										zIndex: "3",
									}}
								>
									<img
										src="/img/delei-selo.jpg"
										width="476"
										height="476"
										alt="Recorte do selo De Lei, com a cadeira de plástico no centro"
										loading="lazy"
									/>
									<span
										className="fita wa"
										style={{
											top: "4px",
											left: "30%",
											"--tr": "-12deg",
											"--tw": "64px",
										}}
									></span>
								</span>
							</figure>
							<button
								type="button"
								className="lbl"
								style={{ "--lr": "-1.4deg" }}
								onClick={h.pickDelei}
								aria-expanded={h.deleiExp}
							>
								<span className="nm">
									Açaí de Lei{" "}
									<span style={{ whiteSpace: "nowrap" }}>· delivery</span>
								</span>
								<span className="ht">{h.deleiHint}</span>
							</button>
							<Collapse open={h.deleiOpen}>
								<div
									className="ficha"
									id="ficha-delei"
									role="region"
									aria-label="Ficha do Açaí de Lei"
									style={{ padding: "32px 24px 24px" }}
								>
									<h3 style={{ marginTop: "0" }}>Açaí de Lei</h3>
									<p style={{ margin: "0 0 8px" }}>
										Site de um delivery de açaí. Fiz em Next.js com Tailwind.
									</p>
									<p style={{ margin: "0" }}>
										<a
											href="https://delei.quazz.com.br"
											style={{
												display: "inline-flex",
												alignItems: "center",
												minHeight: "44px",
												fontWeight: "650",
												overflowWrap: "anywhere",
											}}
										>
											Abrir delei.quazz.com.br
										</a>
									</p>
								</div>
							</Collapse>
						</div>
						<div className={`pick ${h.tudoCls}`} style={{ marginTop: "8px" }}>
							<figure
								className="board"
								onClick={h.pickTudo}
								style={{ aspectRatio: "100 / 92" }}
							>
								<span
									className="pc rasg b m1"
									style={{
										"--x": "0%",
										"--y": "4%",
										"--w": "84%",
										"--r": "1.6deg",
										zIndex: "1",
									}}
								>
									<img
										src="/img/tudo-desktop.jpg"
										width="1200"
										height="725"
										alt="Site da Tudo Aqui Marketing no computador"
										loading="lazy"
									/>
									<span
										className="fita wa"
										style={{
											top: "-14px",
											left: "40%",
											"--tr": "3deg",
											"--tw": "70px",
										}}
									></span>
								</span>
								<span
									className="pc tesw"
									style={{
										"--x": "66%",
										"--y": "30%",
										"--w": "32%",
										"--r": "-3deg",
										"--mw": "38%",
										"--mt": "-14%",
										zIndex: "2",
									}}
								>
									<span className="tes" style={{ "--b": "4px" }}>
										<img
											src="/img/tudo-mobile.jpg"
											width="390"
											height="760"
											alt="Site da Tudo Aqui Marketing no celular"
											loading="lazy"
										/>
									</span>
									<span
										className="fita"
										style={{
											top: "-12px",
											left: "20%",
											"--tr": "-6deg",
											"--tw": "60px",
										}}
									></span>
								</span>
							</figure>
							<button
								type="button"
								className="lbl"
								style={{ "--lr": "0.8deg" }}
								onClick={h.pickTudo}
								aria-expanded={h.tudoExp}
							>
								<span className="nm">
									Tudo Aqui Marketing{" "}
									<span style={{ whiteSpace: "nowrap" }}>· agência</span>
								</span>
								<span className="ht">{h.tudoHint}</span>
							</button>
							<Collapse open={h.tudoOpen}>
								<div
									className="ficha"
									id="ficha-tudo"
									role="region"
									aria-label="Ficha da Tudo Aqui Marketing"
									style={{ padding: "32px 24px 24px" }}
								>
									<h3 style={{ marginTop: "0" }}>Tudo Aqui Marketing</h3>
									<p style={{ margin: "0 0 8px" }}>
										Site de uma agência de marketing. Fiz em Next.js com
										Tailwind.
									</p>
									<p style={{ margin: "0" }}>
										<a
											href="https://tudoaquimarketing.com"
											style={{
												display: "inline-flex",
												alignItems: "center",
												minHeight: "44px",
												fontWeight: "650",
												overflowWrap: "anywhere",
											}}
										>
											Abrir tudoaquimarketing.com
										</a>
									</p>
								</div>
							</Collapse>
						</div>
					</div>
				</section>
			</Collapse>
		</div>
	);
}
