/**
 * Ímã redondo que prende um recorte.
 * Nos projetos: disco roxo com o cristal da Quazz em branco.
 * Nos recortes das marcas da Azzas: disco lilás com um tucano (o bicho da FARM), corpo em tinta,
 * peito e bico claros e a ponta do bico em roxo.
 */
export function Magnet({ icon }: { icon: "quazz" | "toucan" }) {
	return (
		<span className={`ed-magnet ed-magnet-${icon}`} aria-hidden="true">
			{icon === "quazz" ? (
				<svg
					viewBox="14 2 92 116"
					width="12"
					height="15"
					aria-hidden="true"
					focusable="false"
				>
					<path d="M52 8L100 40L70 112L20 86Z" fill="currentColor" />
					<path
						d="M58 54L52 8M58 54L100 40M58 54L20 86"
						stroke="var(--rx)"
						strokeWidth="6"
						strokeLinecap="round"
					/>
				</svg>
			) : (
				<svg
					viewBox="0.5 3.5 21.5 19"
					width="29"
					height="26"
					aria-hidden="true"
					focusable="false"
				>
					<path
						d="M16 7C19.5 7 21 10 20.5 14C20 17.5 19 19.5 18 21.5H15.6C14.6 19 13.4 16.5 13.4 12.5C13.4 9.2 14 7 16 7Z"
						fill="var(--ink)"
					/>
					<path
						d="M14.2 11.8C15.6 11.2 17.4 12.2 17.2 14.2C17 15.8 15.2 16.4 14.3 15.6C13.8 14.4 13.8 12.8 14.2 11.8Z"
						fill="var(--paper)"
					/>
					<path
						d="M14.4 8.2C11 5.2 5 5.6 2.2 9.6C1.8 10.4 2.2 11 3 11.2C7 12.6 11.4 12.6 14.3 11.6Z"
						fill="var(--paper)"
					/>
					<path
						d="M2.2 9.6C3 8.4 4.4 7.3 6 6.7C5.4 8.4 5.6 10.4 6.6 12C5.2 11.9 4 11.6 3 11.2C2.2 11 1.8 10.4 2.2 9.6Z"
						fill="var(--rx)"
					/>
					<path
						d="M14.2 9.9C10.5 9.7 6.2 9.9 2.4 10.4"
						stroke="var(--ink)"
						strokeWidth=".6"
						fill="none"
						strokeLinecap="round"
					/>
					<circle cx="16.6" cy="9" r="1.25" fill="var(--paper)" />
					<circle cx="16.4" cy="9" r=".55" fill="var(--ink)" />
				</svg>
			)}
		</span>
	);
}
