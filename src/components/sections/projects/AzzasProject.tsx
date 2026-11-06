import { Collapse } from "#/components/ui/Collapse";
import type { ProjectHoles } from "./useProjectHoles";

export function AzzasProject({ h }: { h: ProjectHoles }) {
	return (
		<div className="pj">
			<button
				type="button"
				className="px"
				style={{ "--pr": ".3deg" }}
				onClick={h.pickPjAzzas}
				aria-expanded={h.pjAzzasExp}
			>
				<span className="rot" style={{ "--r": "-1.2deg" }}>
					jan/2025 até hoje · estágio
				</span>
				<span className="px-t">Azzas 2154: e-commerce das marcas</span>
				<span className="px-m">
					<span className="px-d">
						E-commerce das marcas do grupo: checkout, e-mails transacionais e
						correções pontuais.
					</span>
					<span className="px-g">
						<span className="rot">VTEX IO</span>
						<span className="rot">FastStore</span>
						<span className="rot">VTEX legacy</span>
						<span className="rot">Master Data</span>
						<span className="rot">Deco CMS</span>
					</span>
				</span>
				<span className="ht">{h.pjAzzasHint}</span>
			</button>
			<Collapse open={h.pjAzzasOpen}>
				<article
					className={`vt pick ${h.azzasCls}`}
					aria-labelledby="azzas-t"
					style={{ "--vtop": "72px" }}
				>
					<div className="vt-tx">
						<div className="hd-s sheet corte">
							<span className="num ca" style={{ "--nr": "-7deg" }}>
								1
							</span>
							<span className="rot" style={{ "--r": "-1.2deg" }}>
								jan/2025 até hoje · estágio
							</span>
							<h3 id="azzas-t">Azzas 2154: e-commerce das marcas</h3>
							<p>
								Estágio de dev web no grupo Azzas 2154 (Grupo Soma). Trabalho no{" "}
								<b>e-commerce</b> das marcas do grupo, do checkout às correções
								pontuais nos sites.
							</p>
						</div>
						<div
							className="fiz sheet quad"
							style={{ transform: "rotate(0.7deg)" }}
						>
							<span
								className="fita"
								aria-hidden="true"
								style={{ top: "-12px", left: "40%", "--tr": "4deg" }}
							></span>
							<h4>O que eu faço lá</h4>
							<ul className="okl">
								<li>
									E-commerce das marcas do grupo: Animale, BYNV, Off Premium,
									Cris Barros, FARM, FARM Etc, Fábula, Carol Bassi, Maria Filó e
									Foxton.
								</li>
								<li>E-mails transacionais de várias marcas.</li>
								<li>Stories de produto na BYNV, com o minicart embutido.</li>
								<li>Buscador de lojas da FARM e correções pontuais.</li>
							</ul>
							<span className="tg-h">Stack na Azzas</span>
							<ul className="tags" aria-label="Stack na Azzas">
								<li className="rot">VTEX IO</li>
								<li className="rot">VTEX FastStore</li>
								<li className="rot">VTEX legacy</li>
								<li className="rot">Master Data</li>
								<li className="rot">Deco CMS</li>
								<li className="rot">APIs REST</li>
							</ul>
						</div>
					</div>
					<div className="vt-mo">
						<figure
							className="board"
							onClick={h.pickAzzas}
							style={{ aspectRatio: "100 / 96" }}
						>
							<span
								className="pc rasg m1"
								style={{
									"--x": "0%",
									"--y": "2%",
									"--w": "92%",
									"--r": "-1deg",
									zIndex: "1",
								}}
							>
								<img
									src="/img/farm-home.jpg"
									width="1186"
									height="657"
									alt="Home pública da FARM Rio; não fiz a home, trabalho em ajustes do site"
								/>
								<span
									className="fita wa"
									style={{
										top: "-14px",
										left: "10%",
										"--tr": "-6deg",
										"--tw": "100px",
									}}
								></span>
							</span>
							<span
								className="pc tesw"
								style={{
									"--x": "74%",
									"--y": "43%",
									"--w": "21%",
									"--r": "5deg",
									"--mw": "38%",
									"--mt": "-12%",
									"--ml": "52%",
									zIndex: "5",
								}}
							>
								<span className="tes" style={{ "--b": "5px" }}>
									<img
										src="/img/farm-ajuda.jpg"
										width="260"
										height="144"
										alt="Recorte do botão flutuante Ajuda? do site da FARM Rio, um dos ajustes em que trabalhei"
									/>
								</span>
								<span
									className="fita"
									style={{
										top: "-12px",
										left: "24%",
										"--tr": "7deg",
										"--tw": "64px",
									}}
								></span>
							</span>
							<span
								className="note so-d"
								aria-hidden="true"
								style={{ "--x": "55%", "--y": "50%" }}
							>
								<span
									className="rot"
									style={{ "--r": "-2deg", whiteSpace: "nowrap" }}
								>
									o botão de ajuda
								</span>
							</span>
							<span
								className="pc rasg b"
								style={{
									"--x": "0%",
									"--y": "60%",
									"--w": "44%",
									"--r": "1.8deg",
									"--mw": "48%",
									"--mt": "6px",
									zIndex: "2",
								}}
							>
								<img
									src="/img/animale-home.jpg"
									width="900"
									height="541"
									alt="Home pública da Animale. Não fiz esta página, trabalho na loja"
									loading="lazy"
								/>
							</span>
							<span
								className="pc rasg"
								style={{
									"--x": "30%",
									"--y": "75%",
									"--w": "42%",
									"--r": "-2.2deg",
									"--mw": "48%",
									"--mt": "6px",
									zIndex: "3",
								}}
							>
								<img
									src="/img/bynv-home.jpg"
									width="900"
									height="425"
									alt="Home pública da BYNV. Não fiz esta página, trabalho na loja"
									loading="lazy"
								/>
								<span
									className="fita"
									style={{
										top: "-14px",
										right: "12%",
										"--tr": "7deg",
										"--tw": "70px",
									}}
								></span>
							</span>
							<span
								className="pc rasg b"
								style={{
									"--x": "57%",
									"--y": "62%",
									"--w": "42%",
									"--r": "1.4deg",
									"--mw": "60%",
									"--mt": "-4%",
									zIndex: "4",
								}}
							>
								<img
									src="/img/offpremium-home.jpg"
									width="900"
									height="450"
									alt="Home pública da Off Premium. Não fiz esta página, trabalho na loja"
									loading="lazy"
								/>
								<span
									className="fita wa"
									style={{
										top: "-14px",
										left: "14%",
										"--tr": "-5deg",
										"--tw": "70px",
									}}
								></span>
							</span>
						</figure>
						<p
							className="tira cap"
							style={{ "--r": "-0.8deg", margin: "-6px 0 0" }}
						>
							Home pública da FARM Rio: não fiz a home. Embaixo, Animale, BYNV e
							Off Premium, marcas em que trabalho.
						</p>
						<p className="dica" aria-hidden="true">
							4 recortes · arraste para o lado
						</p>
						<div
							className="faixa so-m"
							role="region"
							aria-label="Mais recortes da Azzas 2154"
							tabIndex={0}
						>
							<figure className="fx">
								<span className="tesw">
									<span className="tes" style={{ "--b": "5px" }}>
										<img
											src="/img/farm-ajuda.jpg"
											width="260"
											height="144"
											alt="Recorte do botão flutuante Ajuda? do site da FARM Rio, um dos ajustes em que trabalhei"
											loading="lazy"
										/>
									</span>
								</span>
								<figcaption>
									O botão de ajuda da FARM Rio, que ajustei
								</figcaption>
							</figure>
							<figure className="fx">
								<span className="tesw">
									<span className="tes" style={{ "--b": "5px" }}>
										<img
											src="/img/animale-home.jpg"
											width="900"
											height="541"
											alt="Home pública da Animale. Não fiz esta página, trabalho na loja"
											loading="lazy"
										/>
									</span>
								</span>
								<figcaption>Animale</figcaption>
							</figure>
							<figure className="fx">
								<span className="tesw">
									<span className="tes" style={{ "--b": "5px" }}>
										<img
											src="/img/bynv-home.jpg"
											width="900"
											height="425"
											alt="Home pública da BYNV. Não fiz esta página, trabalho na loja"
											loading="lazy"
										/>
									</span>
								</span>
								<figcaption>BYNV</figcaption>
							</figure>
							<figure className="fx">
								<span className="tesw">
									<span className="tes" style={{ "--b": "5px" }}>
										<img
											src="/img/offpremium-home.jpg"
											width="900"
											height="450"
											alt="Home pública da Off Premium. Não fiz esta página, trabalho na loja"
											loading="lazy"
										/>
									</span>
								</span>
								<figcaption>Off Premium</figcaption>
							</figure>
						</div>
						<button
							type="button"
							className="lbl"
							style={{ "--lr": "1deg" }}
							onClick={h.pickAzzas}
							aria-expanded={h.azzasExp}
						>
							<span className="nm">
								Azzas 2154 · tudo o que fiz, em detalhe
							</span>
							<span className="ht">{h.azzasHint}</span>
						</button>
					</div>
					<div className="vt-f">
						<Collapse open={h.azzasOpen}>
							<div
								className="ficha"
								id="ficha-azzas"
								role="region"
								aria-label="Ficha da Azzas 2154"
							>
								<span
									className="fita"
									aria-hidden="true"
									style={{
										top: "-12px",
										left: "40%",
										"--tr": "-3deg",
										"--tw": "100px",
									}}
								></span>
								<span className="rot" style={{ "--r": "-1.5deg" }}>
									Ficha · Azzas 2154
								</span>
								<h3>Azzas 2154, em detalhe</h3>
								<div className="fi-g fi-2 fi-det">
									<div>
										<span className="sub">
											No e-commerce, em todas as marcas
										</span>
										<ul className="okl">
											<li>
												Desenvolvo e mantenho o e-commerce VTEX de Animale,
												BYNV, Off Premium, Cris Barros, FARM, FARM Etc, Fábula,
												Carol Bassi, Maria Filó e Foxton.
											</li>
											<li>
												Mudanças que se repetem entre as marcas: Pix parcelado
												do Pagaleve, banners do Pagaleve, texto de opt-in da
												newsletter e o botão de revisão do pagamento.
											</li>
											<li>
												Animale e FARM: correção de bugs e de layout shift no
												checkout.
											</li>
											<li>
												Animale: cupom e código de vendedor que voltavam depois
												de removidos, e um pipeline de release do checkout.
											</li>

											<li>
												Estudo para esconder a promissória (forma de pagamento
												das trocas) do checkout, com a solução definida junto da
												VTEX: isolá-la em outra política comercial.
											</li>
										</ul>
										<span className="sub">E-mails transacionais</span>
										<ul className="okl">
											<li>
												Templates de e-mail para Cris Barros, BYNV, FARM, Off
												Premium e outras marcas do grupo: confirmação, pagamento
												aprovado, enviado, entregue, cancelado e troca.
											</li>
										</ul>
										<span className="sub">Correções pontuais</span>
										<ul className="okl">
											<li>
												FARM: ao limpar os filtros da busca, o termo sumia da
												URL e a página ficava num estado quebrado.
											</li>
											<li>
												FARM: o minicart mostrava brinde como sem estoque.
											</li>

											<li>
												FARM: ajustes no botão de ajuda flutuante, que já
												existia.
											</li>
										</ul>
									</div>
									<div>
										<span className="sub">Na BYNV</span>
										<ul className="okl">
											<li>
												Stories de produto: o visualizador, a capa de cada
												página e até 6 produtos por story, com o minicart
												embutido para comprar sem sair.
											</li>
											<li>
												Pós-compra: botão de pedido personalizado e aviso
												antifraude na página de pedido concluído.
											</li>
											<li>Tip bar no minicart, ligada ao Master Data.</li>
											<li>
												Horário de atendimento do FAQ editável pelo Site Editor.
											</li>
										</ul>
										<span className="sub">Na FARM Rio</span>
										<ul className="okl">
											<li>
												Buscador de lojas com geolocalização, que acha as lojas
												mais próximas de quem pesquisa, e correção dos filtros
												de estado e cidade.
											</li>
											<li>
												Horário de atendimento do Fala Farm editável pelo CMS.
											</li>
											<li>
												Site FARM Global: correção de um bug e do tamanho da
												mochila, e das bandeiras de país.
											</li>
										</ul>
										<span className="sub">Na Animale</span>
										<ul className="okl">
											<li>
												Correção de um carregamento infinito na lista de
												desejos.
											</li>
										</ul>
										<span className="sub">Na Off Premium</span>
										<ul className="okl">
											<li>
												Atualização do checkout para o rebranding da marca, com
												ajustes de CSS para ficar fiel à identidade atual.
											</li>
										</ul>
									</div>
								</div>
								<div className="fi-g fi-2">
									<div
										className="recibo"
										style={{ transform: "rotate(-0.8deg)" }}
									>
										<span className="rh" aria-hidden="true">
											# checkout
										</span>
										<div style={{ padding: "4px 16px 16px" }}>
											<p
												style={{
													margin: "8px 0 4px",
													fontSize: "15px",
													fontWeight: "650",
													color: "#141210",
												}}
											>
												Corrigi
											</p>
											<ul className="okl" style={{ padding: "0" }}>
												<li>
													Bugs e layout shift no checkout da Animale e da FARM
												</li>

												<li>Estudo para esconder a promissória no checkout</li>
											</ul>
										</div>
									</div>
									<ul className="lst">
										<li>
											Desenvolvo e mantenho o checkout e a página de confirmação
											de pedido dos e-commerces VTEX do grupo, como Animale,
											Cris Barros, BYNV e Off Premium.
										</li>
										<li>
											Integrei o checkout às APIs REST da VTEX e ao Master Data.
										</li>
										<li>
											Auditei o repositório da BYNV e transformei o resultado
											num backlog de 22 issues.
										</li>
									</ul>
								</div>
							</div>
						</Collapse>
					</div>
				</article>
			</Collapse>
		</div>
	);
}
