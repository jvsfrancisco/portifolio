export function AiHeader() {
	return (
		<div className="g12" style={{ alignItems: "end", rowGap: "32px" }}>
			<div style={{ gridColumn: "1 / 8" }}>
				<h2
					id="ia-t"
					className="hd"
					style={{ margin: "0 0 16px", fontSize: "clamp(40px, 5vw, 64px)" }}
				>
					IA no dia a dia, <span className="cw">com freio</span>
				</h2>
				<p
					style={{
						margin: "0",
						maxWidth: "560px",
						fontSize: "18px",
						color: "#4E4840",
					}}
				>
					Uso IA todo dia para programar. O que me interessa é o que montei em
					volta dela. Escolha uma aba.
				</p>
			</div>
			<div
				className="slip sheet paut"
				style={{
					gridColumn: "8 / 13",
					paddingLeft: "24px",
					transform: "rotate(0.9deg)",
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
					leia assim
				</span>
				<p style={{ margin: "8px 0 0" }}>
					<b>Os números são do meu uso, de uma pessoa só.</b> Cada um vem com o
					tamanho da amostra, e amostra pequena eu chamo de indício.
				</p>
			</div>
		</div>
	);
}
