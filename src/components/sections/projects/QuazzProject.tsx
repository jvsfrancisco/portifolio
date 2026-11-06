import { Collapse } from "#/components/ui/Collapse";
import type { ProjectHoles } from "./useProjectHoles";

export function QuazzProject({ h }: { h: ProjectHoles }) {
	return (
		<div className="pj">
			<button
				type="button"
				className="px"
				style={{ "--pr": "-.3deg" }}
				onClick={h.pickPjQuazz}
				aria-expanded={h.pjQuazzExp}
			>
				<span className="rot" style={{ "--r": "1deg" }}>
					jun/2026 até hoje
				</span>
				<span className="px-t">Quazz, minha consultoria em parceria</span>
				<span className="px-m">
					<span className="px-d">
						Consultoria de tecnologia para pequenos negócios.
					</span>
					<span className="px-g">
						<span className="rot">Next.js</span>
						<span className="rot">Tailwind</span>
						<span className="rot">Vercel</span>
					</span>
				</span>
				<span className="ht">{h.pjQuazzHint}</span>
			</button>
			<Collapse open={h.pjQuazzOpen}>
				<article
					className={`vt alt pick ${h.quazzCls}`}
					aria-labelledby="quazz-t"
					style={{ "--vtop": "28px", "--vtopm": "48px" }}
				>
					<div className="vt-tx">
						<div className="hd-s sheet corte">
							<span className="num" style={{ "--nr": "4deg" }}>
								2
							</span>
							<span className="rot" style={{ "--r": "1deg" }}>
								jun/2026 até hoje
							</span>
							<h3 id="quazz-t">Quazz, minha consultoria em parceria</h3>
							<p>
								Consultoria de tecnologia para pequenos negócios, em parceria
								com o Cauã, meu sócio: ele cuida da gestão e da consultoria, e
								eu construo. A Quazz nasceu junto com o primeiro projeto: o
								sistema da Serena Biquínis.
							</p>
						</div>
						<div className="fiz sheet" style={{ transform: "rotate(-0.6deg)" }}>
							<span
								className="fita wa"
								aria-hidden="true"
								style={{ top: "-12px", right: "18%", "--tr": "-4deg" }}
							></span>
							<h4>O que eu fiz</h4>
							<ul className="okl">
								<li>
									Construo os sistemas e os sites dos clientes: a Serena e mais
									três sites, logo abaixo.
								</li>
								<li>O site da própria Quazz, em Next.js com Tailwind.</li>
								<li>Deploy contínuo do site na Vercel via GitHub Actions.</li>
							</ul>
							<span className="tg-h nm-m">Stack do site da Quazz</span>
							<ul className="tags nm-m" aria-label="Stack do site da Quazz">
								<li className="rot">Next.js</li>
								<li className="rot">Tailwind</li>
								<li className="rot">Vercel</li>
								<li className="rot">GitHub Actions</li>
							</ul>
						</div>
					</div>
					<div className="vt-mo">
						<figure
							className="board"
							onClick={h.pickQuazz}
							style={{ aspectRatio: "100 / 83" }}
						>
							<span
								className="pc win m1"
								style={{
									"--x": "0%",
									"--y": "4%",
									"--w": "76%",
									"--r": "-1.2deg",
									zIndex: "1",
								}}
							>
								<span className="wbar" aria-hidden="true">
									<i></i>
									<i></i>
									<i></i>
									<span className="ad">quazz.com.br</span>
								</span>
								<img
									src="/img/quazz-desktop.jpg"
									width="1200"
									height="683"
									alt="Site da Quazz no computador, com o título O balcão, o caixa e o WhatsApp no mesmo sistema"
									loading="lazy"
								/>
								<span
									className="fita wa"
									style={{
										top: "-13px",
										left: "34%",
										"--tr": "-4deg",
										"--tw": "100px",
									}}
								></span>
							</span>
							<span
								className="pc tesw"
								style={{
									"--x": "70%",
									"--y": "6%",
									"--w": "27%",
									"--r": "3deg",
									"--mw": "44%",
									"--ml": "50%",
									"--mt": "-30%",
									zIndex: "2",
								}}
							>
								<span className="tes" style={{ "--b": "5px" }}>
									<img
										src="/img/quazz-mobile.jpg"
										width="352"
										height="686"
										alt="Site da Quazz no celular"
										loading="lazy"
									/>
								</span>
								<span
									className="fita"
									style={{
										top: "-12px",
										left: "22%",
										"--tr": "7deg",
										"--tw": "64px",
									}}
								></span>
							</span>
							<div
								className="pc recibo"
								style={{
									"--x": "6%",
									"--y": "63%",
									"--w": "58%",
									"--r": "-1.4deg",
									"--mw": "100%",
									"--mt": "18px",
									zIndex: "3",
								}}
							>
								<span
									className="fita wa"
									aria-hidden="true"
									style={{
										top: "-10px",
										left: "40%",
										"--tr": "-3deg",
										"--tw": "70px",
									}}
								></span>
								<span className="rh" aria-hidden="true">
									# quem faz o quê
								</span>
								<ul className="duo">
									<li>
										<b>Cauã, meu sócio</b> gestão e consultoria
									</li>
									<li>
										<b>eu</b> sistemas e sites
									</li>
									<li>
										<b>1º projeto</b> Serena Biquínis
									</li>
								</ul>
							</div>
						</figure>
						<button
							type="button"
							className="lbl"
							style={{ "--lr": "-0.6deg" }}
							onClick={h.pickQuazz}
							aria-expanded={h.quazzExp}
						>
							<span className="nm">Quazz · o site da consultoria</span>
							<span className="ht">{h.quazzHint}</span>
						</button>
					</div>
					<div className="vt-f">
						<Collapse open={h.quazzOpen}>
							<div
								className="ficha"
								id="ficha-quazz"
								role="region"
								aria-label="Ficha da Quazz"
							>
								<span className="rot" style={{ "--r": "-1.5deg" }}>
									Ficha · Quazz
								</span>
								<h3>O site da Quazz</h3>
								<p style={{ margin: "0 0 8px" }}>
									O site da consultoria. Fiz em Next.js com Tailwind, com deploy
									contínuo na Vercel via GitHub Actions.
								</p>
								<p style={{ margin: "0" }}>
									<a
										href="https://quazz.com.br"
										style={{
											display: "inline-flex",
											alignItems: "center",
											minHeight: "44px",
											fontWeight: "650",
										}}
									>
										Abrir quazz.com.br
									</a>
								</p>
							</div>
						</Collapse>
					</div>
				</article>
			</Collapse>
		</div>
	);
}
