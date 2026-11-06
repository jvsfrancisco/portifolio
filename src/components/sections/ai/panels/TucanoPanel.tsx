export function TucanoPanel() {
	return (
		<div className="gv-c">
			<span className="rot" style={{ "--r": "1.2deg" }}>
				time · Tucano
			</span>
			<h3 className="gv-h">Do Tucano de uma pessoa para um time</h3>
			<p className="gv-p">
				Tucano é um painel open source onde uma pessoa conversa com vários
				agentes de IA em canais. Na Quazz, eu e o Cauã, meu sócio na
				consultoria, usamos um fork meu para trabalhar em dupla no mesmo painel.
			</p>
			<div className="gv-2">
				<div style={{ display: "grid", gap: "24px", alignContent: "start" }}>
					<ul className="lst">
						<li>
							<b>Um login por pessoa.</b> O núcleo roda numa máquina ligada e
							cada um entra pelo navegador, com nome e senha.
						</li>
						<li>
							<b>Quem escreveu fica marcado.</b> Nos canais e nas conversas
							diretas, a mensagem do Cauã aparece com o avatar e o nome dele, e
							a minha com os meus.
						</li>
						<li>
							<b>O agente sabe quem está falando</b> e responde a quem falou por
							último.
						</li>
						<li>
							<b>O histórico é de todos.</b> Quem entra depois lê o que já
							aconteceu.
						</li>
					</ul>
					<figure
						className="bubs"
						aria-label="Esquema de como a autoria aparece"
					>
						<div className="bub">
							<span className="av">C</span>
							<p>o Cauã escreveu</p>
						</div>
						<div className="bub me">
							<p>você escreveu</p>
							<span className="av">
								<img
									src="/img/joao.png"
									width="284"
									height="284"
									alt=""
									loading="lazy"
								/>
							</span>
						</div>
						<span className="tira" style={{ "--r": "-1deg" }}>
							esquema: cada mensagem leva o autor
						</span>
					</figure>
				</div>
				<figure className="gv-f" style={{ transform: "rotate(0.8deg)" }}>
					<span
						className="fita"
						aria-hidden="true"
						style={{
							top: "-12px",
							left: "12%",
							"--tr": "-4deg",
							"--tw": "88px",
						}}
					></span>
					<span className="tesw" style={{ display: "block" }}>
						<span className="tes" style={{ "--b": "6px" }}>
							<img
								src="/img/tucano-tela.png"
								width="1440"
								height="900"
								alt="Tela do Tucano: um canal chamado checkout onde um agente corrige um erro, abre a MR e outro agente revisa e pede aprovação"
								loading="lazy"
								style={{ display: "block", width: "100%", height: "auto" }}
							/>
						</span>
					</span>
					<figcaption
						className="tira"
						style={{ margin: "16px 0 0 8px", "--r": "-0.8deg" }}
					>
						Tela do Tucano original, com dados de exemplo.
					</figcaption>
				</figure>
			</div>
			<p className="rodape">
				Projeto original:{" "}
				<a
					href="https://github.com/eduwxyz/tucano"
					style={{
						display: "inline-flex",
						alignItems: "center",
						minHeight: "44px",
						fontWeight: "650",
					}}
				>
					eduwxyz/tucano
				</a>
				, licença Apache-2.0.
			</p>
		</div>
	);
}
