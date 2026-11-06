export function HarnessPanel() {
	return (
		<div className="gv-c">
			<span className="rot" style={{ "--r": "-1deg" }}>
				harness · Serena
			</span>
			<h3 className="gv-h">A parada antes de subir</h3>
			<p className="gv-p">
				O sistema da Serena vende de verdade, então a IA trabalha com trava.
				Tudo versionado no repositório.
			</p>
			<ol className="pipe" aria-label="Etapas antes de subir">
				<li className="pp">
					<i>1</i>
					<b>commit</b>
					<span>audita a interface dos arquivos staged</span>
				</li>
				<li className="pp">
					<i>2</i>
					<b>brain:check</b>
					<span>build, tipos, lint e contraste</span>
				</li>
				<li className="pp">
					<i>3</i>
					<b>push</b>
					<span>audita o app inteiro</span>
				</li>
				<li className="pp stop">
					<span className="rot gate" style={{ "--r": "-2deg" }}>
						espera o meu sim
					</span>
					<i>4</i>
					<b>deploy</b>
					<span>só com aprovação explícita</span>
				</li>
				<li className="pp go">
					<i>5</i>
					<b>brain:done</b>
					<span>a tarefa fecha no Notion</span>
				</li>
			</ol>
			<div className="gv-2" style={{ marginTop: "24px" }}>
				<div style={{ display: "grid", gap: "24px", alignContent: "start" }}>
					<ul className="lst">
						<li>Achado grave na auditoria bloqueia o commit e o push.</li>
						<li>
							Push que dispara deploy, migração ou outro efeito externo pede a
							minha aprovação explícita.
						</li>
						<li>
							Em <code>.claude/rules</code> ficam as lições de produção que a IA
							lê em toda sessão.
						</li>
					</ul>
					<p className="tira" style={{ margin: "0", "--r": "-1deg" }}>
						"Verde aqui não é funciona." Os gates dizem que compila, nada além.
						Tela só se aprova vendo renderizada.
					</p>
				</div>
				<figure className="gv-f" style={{ transform: "rotate(1.2deg)" }}>
					<span
						className="fita wa"
						aria-hidden="true"
						style={{
							top: "-12px",
							left: "30%",
							"--tr": "5deg",
							"--tw": "80px",
						}}
					></span>
					<span className="tesw" style={{ display: "block" }}>
						<span className="tes" style={{ "--b": "5px" }}>
							<img
								src="/img/serena-pdv-carrinho.jpg"
								width="324"
								height="430"
								alt="Carrinho do PDV da Serena, com uma peça, cupom e o botão Cobrar"
								loading="lazy"
								style={{
									display: "block",
									width: "100%",
									height: "auto",
									maxWidth: "220px",
									margin: "0 auto",
								}}
							/>
						</span>
					</span>
				</figure>
			</div>
		</div>
	);
}
