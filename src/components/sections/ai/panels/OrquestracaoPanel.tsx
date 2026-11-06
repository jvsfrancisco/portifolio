export function OrquestracaoPanel() {
	return (
		<div className="gv-c">
			<span className="rot" style={{ "--r": "-1.5deg" }}>
				skill própria
			</span>
			<h3 className="gv-h">O Claude orquestra, os outros executam</h3>
			<p className="gv-p">
				O Claude é dono do git. Codex, Gemini (pelo Antigravity) e outras
				instâncias do Claude executam em worktree isolado e nunca commitam. Cada
				execução vira uma linha num benchmark.
			</p>
			<div className="gv-2">
				<div className="recibo" style={{ transform: "rotate(-0.8deg)" }}>
					<span className="rh" aria-hidden="true">
						# fluxo de cada tarefa
					</span>
					<ol className="flow">
						<li>
							<b>Classifico</b> o tipo da tarefa e os arquivos que ela pode
							tocar.
						</li>
						<li>
							<b>Escolho</b> o executor pela tabela do benchmark.
						</li>
						<li>
							<b>Despacho</b> num worktree isolado, em segundo plano.
						</li>
						<li>
							<b>Checagem objetiva primeiro:</b> build, lint, script de
							acessibilidade.
						</li>
						<li>
							<b>Revisão</b> por um modelo diferente do que produziu.
						</li>
						<li>
							<b>Registro</b> nota, tempo e o custo de orquestrar.
						</li>
						<li className="dn">
							<b>Retrospectiva:</b> a tabela de preferências é reescrita com o
							que foi medido.
						</li>
					</ol>
				</div>
				<div style={{ display: "grid", gap: "16px", alignContent: "start" }}>
					<div className="recibo" style={{ transform: "rotate(0.8deg)" }}>
						<span className="rh" aria-hidden="true">
							# benchmark
						</span>
						<div className="sg">
							<div className="stat">
								<span>execuções registradas</span>
								<b>91</b>
							</div>
							<div className="stat">
								<span>página, Codex sol</span>
								<b>29 de 30</b>
							</div>
							<div className="stat">
								<span>página, Gemini flash</span>
								<b>4 de 13</b>
							</div>
							<div className="stat">
								<span>bug, Codex sol</span>
								<b>7 de 7</b>
							</div>
						</div>
					</div>
					<ul className="lst">
						<li>
							<b>Um revisor inventou arquivos.</b> A crítica de um modelo citou
							6 planos que não existiam e declarou "100% verificado". Agora rodo{" "}
							<code>ls</code> antes de repassar um achado.
						</li>
						<li>
							<b>Build verde não é tela certa.</b> Só digo "pronto" depois de
							abrir lado a lado com o original.
						</li>
						<li>
							<b>Não delego</b> decisão de design, publicação nem merge na main.
						</li>
					</ul>
				</div>
			</div>
			<p className="rodape">
				As 91 execuções incluem falhas. A maior parte das falhas do Gemini flash
				foi permissão da ferramenta, não qualidade do modelo, e eu leio a célula
				sem elas. Abaixo de 3 execuções revisadas por célula é indício, não
				resultado.
			</p>
		</div>
	);
}
