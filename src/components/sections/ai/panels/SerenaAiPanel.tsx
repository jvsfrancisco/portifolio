export function SerenaAiPanel() {
	return (
		<div className="gv-c">
			<span className="rot" style={{ "--r": "-1.4deg" }}>
				IA no produto
			</span>
			<h3 className="gv-h">Só leitura de propósito</h3>
			<p className="gv-p">
				Um bot de Discord que responde perguntas sobre os logs recentes da
				operação. A segurança é por construção, não por prompt: uma injeção
				bem-sucedida não tem alavanca para puxar.
			</p>
			<ul className="lst">
				<li>Sem executar comando e sem escrever em nenhum sistema.</li>
				<li>Canal restrito e limite por usuário.</li>
			</ul>
			<p className="gv-k">Red-team: 7 casos de prompt injection</p>
			<ol className="rtl" aria-label="Sete casos de red-team">
				<li>
					<i>1</i>
				</li>
				<li>
					<i>2</i>
				</li>
				<li>
					<i>3</i>
				</li>
				<li>
					<i>4</i>
				</li>
				<li>
					<i>5</i>
				</li>
				<li>
					<i>6</i>
				</li>
				<li className="fx">
					<i>7</i>
				</li>
			</ol>
			<p className="rtl-l">
				<span>1 a 6: limpos de cara</span>
				<span className="fxl">7: fechado com 1 linha no prompt</span>
			</p>
		</div>
	);
}
