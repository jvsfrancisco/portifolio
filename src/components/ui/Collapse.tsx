import { type ReactNode, useEffect, useRef, useState } from "react";

/** Mesma duração do CSS (`--dur-collapse` em tokens.css). Mantenha os dois iguais. */
const DURATION_MS = 520;

/**
 * Abre e fecha um bloco com altura suave (grid 0fr -> 1fr) e conteúdo que entra por transform e opacity.
 * O conteúdo só fica montado enquanto aberto ou animando; depois de assentar, o corte (overflow) sai,
 * para que fitas, sombras e papéis tortos não sejam cortados.
 */
export function Collapse({
	open,
	children,
}: {
	open: boolean;
	children: ReactNode;
}) {
	const [mounted, setMounted] = useState(open);
	const [shown, setShown] = useState(open);
	const [settled, setSettled] = useState(open);
	// só anima o que abre por clique; o que já nasce aberto aparece parado
	const [animate, setAnimate] = useState(false);
	const first = useRef(true);

	useEffect(() => {
		const wasFirst = first.current;
		first.current = false;
		if (open) {
			if (wasFirst) return;
			setAnimate(true);
			setMounted(true);
			// dois frames: o primeiro pinta fechado, o segundo dispara a transição
			let second = 0;
			const raf1 = requestAnimationFrame(() => {
				second = requestAnimationFrame(() => setShown(true));
			});
			const done = setTimeout(() => setSettled(true), DURATION_MS + 60);
			return () => {
				cancelAnimationFrame(raf1);
				cancelAnimationFrame(second);
				clearTimeout(done);
			};
		}
		setSettled(false);
		setShown(false);
		const gone = setTimeout(() => setMounted(false), DURATION_MS + 60);
		return () => clearTimeout(gone);
	}, [open]);

	if (!mounted) return null;

	const cls = [
		"cl",
		shown ? "cl-open" : "",
		settled ? "cl-settled" : "",
		animate ? "cl-anim" : "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={cls}>
			<div className="cl-in">{children}</div>
		</div>
	);
}
