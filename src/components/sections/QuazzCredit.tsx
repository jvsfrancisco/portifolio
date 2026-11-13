import { useRef } from "react";

const QUAZZ_URL = "https://www.quazz.com.br";

/**
 * Crédito "feito por Quazz" com o easter egg dos sites da Quazz, na versão deste site:
 * o logo (símbolo e nome) é um cupom com linha tracejada em volta. Ao clicar, uma tesoura corre
 * pela linha, o recorte se solta e levanta, deixando o buraco no papel. O site da Quazz abre em nova aba.
 * Com "reduzir movimento" ou tecla modificadora, o link abre direto.
 */
export function QuazzCredit() {
	const ref = useRef<HTMLAnchorElement>(null);
	const timer = useRef(0);

	const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const el = ref.current;
		const reduce = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (!el || reduce || e.metaKey || e.ctrlKey || e.shiftKey) return;
		window.clearTimeout(timer.current);
		el.classList.remove("is-cut");
		window.requestAnimationFrame(() => el.classList.add("is-cut"));
		timer.current = window.setTimeout(() => {
			el.classList.remove("is-cut");
		}, 2300);
	};

	return (
		<p className="ed-credit">
			<a
				ref={ref}
				href={QUAZZ_URL}
				target="_blank"
				rel="noopener"
				onClick={onClick}
				title="Recorta e cola"
				className="quazz-easter"
			>
				<span className="quazz-slip">
					<span className="fita wa" aria-hidden="true" />
					Feito com tesoura, fita e código por
					<span className="quazz-cutout">
						<span className="quazz-hole" aria-hidden="true" />
						<span className="quazz-piece">
							<svg
								viewBox="-6 -88 391.63 113"
								role="img"
								aria-label="Quazz"
								className="quazz-logo"
							>
								<g transform="translate(-19.37 -89.75) scale(0.9683)">
									<mask
										id="quazz-mark"
										maskUnits="userSpaceOnUse"
										x="0"
										y="0"
										width="120"
										height="120"
									>
										<rect width="120" height="120" fill="#fff" />
										<path
											d="M58 54L52 8M58 54L100 40M58 54L20 86"
											stroke="#000"
											strokeWidth="4"
											strokeLinecap="round"
										/>
									</mask>
									<path
										d="M52 8L100 40L70 112L20 86Z"
										fill="currentColor"
										mask="url(#quazz-mark)"
									/>
								</g>
								<path
									transform="translate(94.36 0)"
									fill="currentColor"
									d="M54.9 18.7Q44.4 18.7 39.22 13.8Q34.03 8.9 35.3 1.7L35.41 1.1Q21.24-.2 14.17-10.3Q7.1-20.4 9.83-35.9Q12.77-52.6 24.65-62.95Q36.52-73.3 52.22-73.3Q68.02-73.3 76.35-62.95Q84.67-52.6 81.73-35.9Q79.28-22 70.37-12.3Q61.46-2.6 48.78.1Q50.62 4.4 59.32 4.4Q67.82 4.4 75.44 1.5L74.05 15.6Q65.5 18.7 54.9 18.7ZM41.89-14.1Q50.59-14.1 56.94-19.8Q63.3-25.5 64.95-34.9Q66.61-44.3 62.13-50.05Q57.64-55.8 49.14-55.8Q40.64-55.8 34.28-50.05Q27.91-44.3 26.25-34.9Q24.61-25.6 28.95-19.85Q33.29-14.1 41.89-14.1ZM125.27-54.3H140.77L131.2 0H116L117.18-6.7H116.78Q110.07 1.3 100.17 1.3Q90.47 1.3 86.28-4.7Q82.09-10.7 83.89-20.9L89.77-54.3H105.27L100.16-25.3Q97.99-13 107.89-13Q112.89-13 116.04-16.4Q119.19-19.8 120.21-25.6L125.27-54.3ZM173.68-34.5Q174.6-39.7 164.7-39.7Q156.2-39.7 146.58-35.6L148.21-51.1Q157.5-55.6 169.1-55.6Q181.6-55.6 186.51-49.95Q191.41-44.3 189.44-33.1L183.6 0H167.8L168.96-6.6Q160.97 1.3 150.97 1.3Q143.97 1.3 140.36-2.3Q136.74-5.9 137.9-12.5Q139.31-20.5 145.35-24.1Q151.38-27.7 161.78-29.4Q167.98-30.5 171.07-31.6Q173.33-32.5 173.68-34.5ZM170.41-14.8L171.96-23.6Q168.48-22 164.02-21.1Q159.44-20.1 157.19-18.65Q154.93-17.2 154.39-14.1Q153.93-11.5 155.59-10.15Q157.25-8.8 160.25-8.8Q163.35-8.8 166.05-10.5Q168.75-12.2 170.41-14.8ZM231.2 0H187.5L189.56-11.7L218.76-39.5H195.56L198.17-54.3H240.27L237.82-40.4L208.78-13.5H233.58L231.2 0ZM276.2 0H232.5L234.56-11.7L263.76-39.5H240.56L243.17-54.3H285.27L282.82-40.4L253.78-13.5H278.58L276.2 0Z"
								/>
							</svg>
						</span>
						<svg
							className="quazz-scissors"
							viewBox="0 0 24 24"
							width="16"
							height="16"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							aria-hidden="true"
							focusable="false"
						>
							<circle cx="6" cy="6" r="3" />
							<circle cx="6" cy="18" r="3" />
							<path d="M8.6 7.6 21 16M8.6 16.4 21 8" />
						</svg>
					</span>
				</span>
			</a>
		</p>
	);
}
