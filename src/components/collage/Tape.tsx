import type { Tape as TapeData } from "#/content/types";

/** Fita adesiva colada na ponta de um papel. Decorativa: some para leitores de tela. */
export function Tape({
	side,
	at,
	tilt,
	washi,
	top = "-12px",
	width,
}: TapeData & { top?: string; width?: string }) {
	return (
		<span
			className={washi ? "fita wa" : "fita"}
			aria-hidden="true"
			style={{
				top,
				[side]: at,
				"--tr": `${tilt}deg`,
				...(width ? { "--tw": width } : {}),
			}}
		/>
	);
}
