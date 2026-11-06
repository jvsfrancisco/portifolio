export function BrainPanel() {
	return (
		<div className="gv-c">
			<span className="rot" style={{ "--r": "1deg" }}>
				second brain · Notion
			</span>
			<h3 className="gv-h">A IA começa a sessão sabendo onde está</h3>
			<p className="gv-p">
				Antes, cada sessão começava lendo todas as regras e consultando o
				Notion. Agora são dois arquivos enxutos: o <code>index.md</code>, com a
				arquitetura, o mapa do repositório e as armadilhas, e o{" "}
				<code>CURRENT_TASK.md</code>, com só a tarefa em foco.
			</p>
			<div className="gv-2">
				<figure className="term" aria-label="Comandos do yarn brain">
					<span className="td" aria-hidden="true">
						<i></i>
						<i></i>
						<i></i>
					</span>
					<ul>
						<li style={{ "--d": ".15s" }}>
							<span className="pm">$</span> yarn brain:sync
						</li>
						<li className="c" style={{ "--d": ".35s" }}>
							# tarefas do Notion para o cache local
						</li>
						<li style={{ "--d": ".6s" }}>
							<span className="pm">$</span> yarn brain:task 12
						</li>
						<li className="c" style={{ "--d": ".8s" }}>
							# o escopo vira a tarefa ativa
						</li>
						<li style={{ "--d": "1.05s" }}>
							<span className="pm">$</span> yarn brain:check
						</li>
						<li className="c" style={{ "--d": "1.25s" }}>
							# build, tipos, lint e contraste
						</li>
						<li style={{ "--d": "1.5s" }}>
							<span className="pm">$</span> yarn brain:done
						</li>
						<li className="c" style={{ "--d": "1.7s" }}>
							# gates ok: a tarefa vira Concluído no Notion
						</li>
						<li style={{ "--d": "1.95s" }}>
							<span className="pm">$</span>{" "}
							<span className="cur" aria-hidden="true"></span>
						</li>
					</ul>
				</figure>
				<ul className="lst">
					<li>O Notion guarda a fila, e o cache local vale 24 h.</li>
					<li>
						A IA transforma o escopo em critérios de aceite e arquivos afetados.
					</li>
					<li>Com tarefa ativa, ela faz 0 consultas ao Notion.</li>
					<li>
						Sem token da API, sincroniza pelo MCP do Notion e grava o mesmo
						cache.
					</li>
					<li>
						Se o <code>brain:check</code> passou nos últimos 15 minutos, o{" "}
						<code>brain:done</code> reaproveita o resultado.
					</li>
				</ul>
			</div>
			<p className="rodape">
				Não medi a economia de tokens, então não publico número.
			</p>
		</div>
	);
}
