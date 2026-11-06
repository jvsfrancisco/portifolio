import { Collapse } from "#/components/ui/Collapse";
import type { ProjectHoles } from "./useProjectHoles";

export function SerenaProject({ h }: { h: ProjectHoles }) {
	return (
		<div className="pj">
			<button
				type="button"
				className="px"
				style={{ "--pr": ".4deg" }}
				onClick={h.pickPjSerena}
				aria-expanded={h.pjSerenaExp}
			>
				<span className="rot" style={{ "--r": "-1.4deg" }}>
					Quazz · primeiro projeto
				</span>
				<span className="px-t">Serena Biquínis</span>
				<span className="px-m">
					<span className="px-d">
						Do PDV offline ao financeiro, em produção desde 19/09/2026.
					</span>
					<span className="px-g">
						<span className="rot">Medusa v2</span>
						<span className="rot">PostgreSQL</span>
						<span className="rot">Redis</span>
					</span>
				</span>
				<span className="ht">{h.pjSerenaHint}</span>
			</button>
			<Collapse open={h.pjSerenaOpen}>
				<article
					className={`vt vt-se pick ${h.serenaCls}`}
					aria-labelledby="serena-t"
					style={{ "--vtop": "48px", "--cm": "8fr" }}
				>
					<div className="vt-tx">
						<div
							className="hd-s sheet corte"
							style={{ transform: "rotate(0.5deg)" }}
						>
							<span className="num ca" style={{ "--nr": "7deg" }}>
								3
							</span>
							<span className="rot" style={{ "--r": "-1.4deg" }}>
								Quazz · primeiro projeto
							</span>
							<h3 id="serena-t">Serena Biquínis</h3>
							<p>
								Loja de moda praia no Engenho Novo, no Rio, que vende no balcão
								e pelo WhatsApp. Antes não registrava nenhuma venda. É o projeto
								em que a Quazz mais trabalhou: fiz o sistema do PDV ao
								financeiro, <b>em produção desde 19/09/2026</b>.
							</p>
						</div>
						<div
							className="fiz sheet quad"
							style={{ transform: "rotate(0.6deg)" }}
						>
							<span
								className="fita"
								aria-hidden="true"
								style={{ top: "-12px", left: "18%", "--tr": "-5deg" }}
							></span>
							<h4>O que eu fiz</h4>
							<ul className="okl">
								<li>
									PDV que vende mesmo sem internet, no computador e no celular.
								</li>
								<li>
									Abertura e fechamento de caixa, cashback e troca no balcão.
								</li>
								<li>
									Painel financeiro: fluxo de caixa, contas a pagar, DRE e
									conciliação bancária.
								</li>
								<li>A página de links da loja.</li>
								<li>Deploy com 4 pipelines e rollback por SHA.</li>
							</ul>
							<span className="tg-h">Stack</span>
							<ul className="tags" aria-label="Stack da Serena">
								<li className="rot">Medusa v2</li>
								<li className="rot">PostgreSQL</li>
								<li className="rot">Redis</li>
								<li className="rot">Docker</li>
								<li className="rot">Oracle Cloud</li>
							</ul>
						</div>
					</div>
					<div className="vt-mo">
						<figure
							className="board"
							onClick={h.pickSerena}
							style={{ aspectRatio: "100 / 104" }}
						>
							<span
								className="pc rasg m1"
								style={{
									"--x": "0%",
									"--y": "1%",
									"--w": "76%",
									"--r": "-1.2deg",
									zIndex: "1",
								}}
							>
								<img
									src="/img/serena-pdv-desktop.jpg"
									width="1200"
									height="508"
									alt="PDV da Serena no computador: vitrine de biquínis com os tamanhos em estoque e o carrinho ao lado"
								/>
								<span
									className="fita wa"
									style={{ top: "-14px", left: "8%", "--tr": "-6deg" }}
								></span>
							</span>
							<span
								className="pc tesw"
								style={{
									"--x": "58%",
									"--y": "8%",
									"--w": "24%",
									"--r": "3.5deg",
									"--mw": "40%",
									"--mt": "-6%",
									zIndex: "4",
								}}
							>
								<span className="tes" style={{ "--b": "5px" }}>
									<img
										src="/img/serena-pdv-carrinho.jpg"
										width="324"
										height="430"
										alt="Recorte ampliado do carrinho do PDV, com uma peça, cupom e o botão Cobrar"
									/>
								</span>
								<span
									className="fita"
									style={{
										top: "-12px",
										left: "26%",
										"--tr": "6deg",
										"--tw": "72px",
									}}
								></span>
							</span>
							<span
								className="pc tesw"
								style={{
									"--x": "83%",
									"--y": "4%",
									"--w": "17%",
									"--r": "4deg",
									"--mw": "30%",
									"--mt": "-4%",
									zIndex: "3",
								}}
							>
								<span className="tes" style={{ "--b": "4px" }}>
									<img
										src="/img/serena-pdv-mobile.jpg"
										width="390"
										height="650"
										alt="PDV da Serena aberto no celular, na tela da vitrine"
									/>
								</span>
							</span>
							<span
								className="pc tesw"
								style={{
									"--x": "84%",
									"--y": "27%",
									"--w": "15%",
									"--r": "-4deg",
									"--mw": "22%",
									"--mt": "0px",
									zIndex: "5",
								}}
							>
								<span className="tes" style={{ "--b": "4px" }}>
									<img
										src="/img/serena-card-biquini.jpg"
										width="200"
										height="326"
										alt="Card de um biquíni na vitrine do PDV: Candy Asa Delta Rosa, R$ 130,00, com o estoque por tamanho"
									/>
								</span>
								<span
									className="fita wa"
									style={{
										top: "-11px",
										left: "18%",
										"--tr": "-8deg",
										"--tw": "56px",
									}}
								></span>
							</span>
							<span
								className="pc rasg b"
								style={{
									"--x": "2%",
									"--y": "30%",
									"--w": "62%",
									"--r": "1.6deg",
									"--mt": "-3%",
									zIndex: "2",
								}}
							>
								<img
									src="/img/serena-financeiro.jpg"
									width="1200"
									height="375"
									alt="Topo do painel financeiro da Serena, com o título Setembro"
								/>
								<span
									className="fita"
									style={{ top: "-14px", left: "12%", "--tr": "-5deg" }}
								></span>
							</span>
							<span
								className="pc tesw"
								style={{
									"--x": "32%",
									"--y": "45%",
									"--w": "66%",
									"--r": "-1.6deg",
									"--mw": "96%",
									"--mt": "-2%",
									zIndex: "3",
								}}
							>
								<span className="tes">
									<img
										src="/img/serena-links.jpg"
										width="1200"
										height="675"
										alt="Página de links da Serena Biquínis, com fotos da loja e botão de atendimento pelo WhatsApp"
									/>
								</span>
								<span
									className="fita"
									style={{ top: "-12px", right: "14%", "--tr": "5deg" }}
								></span>
							</span>
							<span
								className="pc polar"
								style={{
									"--x": "0%",
									"--y": "48%",
									"--w": "34%",
									"--r": "-4deg",
									"--mw": "66%",
									"--mt": "-10%",
									zIndex: "5",
								}}
							>
								<img
									src="/img/serena-arara.jpg"
									width="356"
									height="392"
									alt="Foto da arara de biquínis dentro da loja Serena"
								/>
								<span className="leg">a arara, no Engenho Novo</span>
								<span
									className="fita"
									style={{
										top: "-12px",
										left: "30%",
										"--tr": "-4deg",
										"--tw": "70px",
									}}
								></span>
							</span>
							<span
								className="pc tes"
								style={{
									"--x": "38%",
									"--y": "84%",
									"--w": "15%",
									"--r": "-6deg",
									"--mw": "28%",
									"--mt": "6%",
									"--b": "4px",
									zIndex: "6",
								}}
							>
								<img
									src="/img/serena-logo.jpg"
									width="130"
									height="86"
									alt="Logo da Serena Biquínis"
								/>
							</span>
						</figure>
						<p className="dica" aria-hidden="true">
							5 telas · arraste para o lado
						</p>
						<div
							className="faixa so-m"
							role="region"
							aria-label="Mais telas da Serena Biquínis"
							tabIndex={0}
						>
							<figure className="fx">
								<span className="tesw">
									<span className="tes" style={{ "--b": "5px" }}>
										<img
											src="/img/serena-pdv-carrinho.jpg"
											width="324"
											height="430"
											alt="Recorte ampliado do carrinho do PDV, com uma peça, cupom e o botão Cobrar"
											loading="lazy"
										/>
									</span>
								</span>
								<figcaption>O carrinho do PDV</figcaption>
							</figure>
							<figure className="fx">
								<span className="tesw">
									<span className="tes" style={{ "--b": "5px" }}>
										<img
											src="/img/serena-pdv-mobile.jpg"
											width="390"
											height="650"
											alt="PDV da Serena aberto no celular, na tela da vitrine"
											loading="lazy"
										/>
									</span>
								</span>
								<figcaption>O PDV no celular</figcaption>
							</figure>
							<figure className="fx">
								<span className="tesw">
									<span className="tes" style={{ "--b": "5px" }}>
										<img
											src="/img/serena-financeiro.jpg"
											width="1200"
											height="375"
											alt="Topo do painel financeiro da Serena, com o título Setembro"
											loading="lazy"
										/>
									</span>
								</span>
								<figcaption>O painel financeiro</figcaption>
							</figure>
							<figure className="fx">
								<span className="tesw">
									<span className="tes" style={{ "--b": "5px" }}>
										<img
											src="/img/serena-links.jpg"
											width="1200"
											height="675"
											alt="Página de links da Serena Biquínis, com fotos da loja e botão de atendimento pelo WhatsApp"
											loading="lazy"
										/>
									</span>
								</span>
								<figcaption>A página de links da loja</figcaption>
							</figure>
							<figure className="fx">
								<span className="tesw">
									<span className="tes" style={{ "--b": "5px" }}>
										<img
											src="/img/serena-arara.jpg"
											width="356"
											height="392"
											alt="Foto da arara de biquínis dentro da loja Serena"
											loading="lazy"
										/>
									</span>
								</span>
								<figcaption>A arara, no Engenho Novo</figcaption>
							</figure>
						</div>
						<div className="se-row">
							<button
								type="button"
								className="lbl"
								style={{ "--lr": "-2deg" }}
								onClick={h.pickSerena}
								aria-expanded={h.serenaExp}
							>
								<span className="nm">
									Serena Biquínis · o sistema por dentro
								</span>
								<span className="ht">{h.serenaHint}</span>
							</button>
							<div
								className="mx recibo"
								style={{ transform: "rotate(-1.4deg)" }}
							>
								<span
									className="fita wa"
									aria-hidden="true"
									style={{
										top: "-10px",
										left: "30%",
										"--tr": "4deg",
										"--tw": "76px",
									}}
								></span>
								<span className="big">+R$ 15 mil</span>
								<p style={{ marginTop: "8px" }}>
									em vendas registradas desde 19/09/2026.
								</p>
								<p className="tot">
									571 commits e 69 pull requests de junho a outubro de 2026, e
									11 módulos próprios em cima do Medusa v2.
								</p>
							</div>
						</div>
					</div>
					<div className="vt-f">
						<Collapse open={h.serenaOpen}>
							<div
								className="ficha"
								id="ficha-serena"
								role="region"
								aria-label="Ficha da Serena Biquínis"
							>
								<span
									className="fita wa"
									aria-hidden="true"
									style={{
										top: "-12px",
										left: "46%",
										"--tr": "3deg",
										"--tw": "110px",
									}}
								></span>
								<span className="rot" style={{ "--r": "-1.5deg" }}>
									Ficha · Serena Biquínis
								</span>
								<h3>O sistema por dentro</h3>
								<div className="fi-g">
									<div>
										<ul className="lst">
											<li>
												PDV como PWA offline-first: sem internet, a venda vai
												para uma fila no IndexedDB e sincroniza numa rota
												idempotente, sem duplicar pedido.
											</li>
											<li>
												Abertura e fechamento de caixa, cashback e troca no
												balcão.
											</li>
											<li>
												Painel financeiro: fluxo de caixa, contas a pagar, DRE,
												conciliação bancária por CSV, meta do mês e Web Push.
											</li>
											<li>
												Medusa v2 com 11 módulos próprios, PostgreSQL e Redis,
												em Docker na Oracle Cloud.
											</li>
										</ul>
									</div>
									<div style={{ display: "grid", gap: "24px" }}>
										<div
											className="recibo"
											style={{ transform: "rotate(0.8deg)" }}
										>
											<span className="rh" aria-hidden="true">
												# pdv sem internet
											</span>
											<ol
												className="flow"
												aria-label="O que acontece com uma venda sem internet"
											>
												<li>
													<b>Sem internet no balcão.</b>
												</li>
												<li>
													<b>A venda entra na fila</b> no IndexedDB.
												</li>
												<li>
													<b>A internet volta</b> e a fila sincroniza numa rota
													idempotente.
												</li>
												<li className="dn">
													<b>Nenhum pedido duplicado.</b>
												</li>
											</ol>
										</div>
										<div
											className="recibo"
											style={{
												transform: "rotate(-1deg)",
												marginRight: "16px",
											}}
										>
											<span className="rh" aria-hidden="true">
												# deploy
											</span>
											<ul className="diff" aria-label="Como o deploy funciona">
												<li className="ad">
													4 pipelines de deploy no GitHub Actions
												</li>
												<li className="ad">rollback por SHA</li>
												<li className="ad">OpenTelemetry e Grafana Cloud</li>
											</ul>
										</div>
									</div>
								</div>
								<p className="rodape">
									Sistema interno da loja, sem link público. As telas aparecem
									aqui com autorização da dona.
								</p>
							</div>
						</Collapse>
					</div>
				</article>

				<section
					id="bastidores"
					aria-labelledby="bst-t"
					style={{ marginTop: "64px" }}
				>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							alignItems: "center",
							gap: "16px 24px",
							marginBottom: "32px",
						}}
					>
						<div
							className="slip sheet paut"
							style={{
								maxWidth: "560px",
								paddingLeft: "24px",
								transform: "rotate(-0.8deg)",
							}}
						>
							<span
								className="rot"
								style={{
									"--r": "-2deg",
									position: "absolute",
									top: "-16px",
									left: "14px",
								}}
							>
								bastidores da Serena
							</span>
							<p style={{ marginTop: "8px" }}>
								<b id="bst-t">Três histórias de bastidor da Serena.</b> O que
								quebrou, o que ficou lento e uma troca de banco.
							</p>
						</div>
					</div>
					<p className="dica" aria-hidden="true">
						3 bastidores · arraste para o lado
					</p>
					<div
						className="bst-g faixa"
						role="region"
						aria-label="Três histórias de bastidor da Serena"
						tabIndex={0}
					>
						<article
							className="sheet rtop bst"
							style={{ transform: "rotate(-0.6deg)" }}
						>
							<span
								className="fita"
								aria-hidden="true"
								style={{ top: "-13px", left: "34%", "--tr": "4deg" }}
							></span>
							<span className="rot" style={{ "--r": "-1deg" }}>
								Bastidor · cashback
							</span>
							<h3>O cashback parou de cair</h3>
							<p>
								Nenhum erro, e nenhum cashback. O grafo de pedidos do Medusa
								devolvia items.quantity como undefined. Passei a ler
								items.detail.quantity.
							</p>
							<div
								className="recibo"
								aria-hidden="true"
								style={{
									transform: "rotate(1deg)",
									margin: "4px 8px 0 8px",
								}}
							>
								<span className="rh"># cashback</span>
								<ol className="code">
									<li className="cm"># grafo de pedidos do Medusa</li>
									<li className="pr">items.quantity</li>
									<li>undefined</li>
									<li className="bad">✗ nenhum erro e nenhum cashback</li>
									<li className="gap"></li>
									<li className="pr">items.detail.quantity</li>
									<li>✓ cashback de volta</li>
								</ol>
							</div>
						</article>
						<article
							className="sheet corte quad bst"
							style={{ transform: "rotate(0.9deg)", marginTop: "40px" }}
						>
							<span
								className="fita wa"
								aria-hidden="true"
								style={{ top: "-12px", right: "16%", "--tr": "-5deg" }}
							></span>
							<span className="rot" style={{ "--r": "1deg" }}>
								Bastidor · catálogo
							</span>
							<h3>Catálogo de ~4,3 s para ~0,5 s</h3>
							<p>Mediana em produção, com 170 produtos e 647 variantes.</p>
							<div
								className="recibo"
								style={{ transform: "rotate(-1.2deg)", margin: "0 -6px" }}
							>
								<div className="meter">
									<p className="mlab" style={{ marginTop: "16px" }}>
										Catálogo (mediana)
									</p>
									<div className="mrow">
										<span>antes</span>
										<span className="tr">
											<span className="fl" style={{ "--v": "100%" }}></span>
										</span>
										<b>~4,3 s</b>
									</div>
									<div className="mrow nw">
										<span>depois</span>
										<span className="tr">
											<span className="fl" style={{ "--v": "11.6%" }}></span>
										</span>
										<b>~0,5 s</b>
									</div>
									<p className="mlab" style={{ marginTop: "16px" }}>
										Com o cache
									</p>
									<div className="mrow">
										<span>sem</span>
										<span className="tr">
											<span className="fl" style={{ "--v": "100%" }}></span>
										</span>
										<b>474 ms</b>
									</div>
									<div className="mrow nw">
										<span>com</span>
										<span className="tr">
											<span className="fl" style={{ "--v": "9.5%" }}></span>
										</span>
										<b>45 ms</b>
									</div>
								</div>
								<ul
									className="diff"
									style={{
										borderTop: "1.5px dashed rgba(42, 38, 34, 0.35)",
										paddingTop: "8px",
									}}
									aria-label="O que mudou"
								>
									<li className="ad">consultas em paralelo</li>
									<li className="rm">cortei uma relação que custava ~1,2 s</li>
									<li className="ad">pus cache invalidado por evento</li>
								</ul>
							</div>
						</article>
						<article
							className="sheet veg bst bank"
							style={{ transform: "rotate(-0.5deg)" }}
						>
							<span
								className="fita"
								aria-hidden="true"
								style={{ top: "-13px", left: "14%", "--tr": "-3deg" }}
							></span>
							<div>
								<span className="rot" style={{ "--r": "-1.5deg" }}>
									Bastidor · banco
								</span>
								<h3>Troca de banco com 49 s fora do ar</h3>
								<p>Do Neon para PostgreSQL numa VM da Oracle Cloud.</p>
								<p className="note2">
									Foi antes de a loja começar a usar o sistema.
								</p>
							</div>
							<div className="recibo" style={{ transform: "rotate(1.2deg)" }}>
								<span className="rh" aria-hidden="true">
									# migração
								</span>
								<div className="sg">
									<div className="stat">
										<span>fora do ar</span>
										<b>49 s</b>
									</div>
									<div className="stat">
										<span>tabelas conferidas</span>
										<b>153</b>
									</div>
									<div className="stat">
										<span>uma query, antes</span>
										<b>~125 ms</b>
									</div>
									<div className="stat">
										<span>a mesma, depois</span>
										<b>{"<"} 1 ms</b>
									</div>
									<div className="stat full">
										<span>rollback</span>
										<b style={{ fontSize: "17px", fontWeight: "650" }}>
											Neon guardado
										</b>
									</div>
								</div>
							</div>
						</article>
					</div>
				</section>
			</Collapse>
		</div>
	);
}
