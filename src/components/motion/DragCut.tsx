import {
	animate,
	motion,
	useMotionValue,
	useReducedMotion,
} from "motion/react";
import type { ReactNode, RefObject } from "react";
import { useRef } from "react";

const BACK = { type: "spring", stiffness: 320, damping: 30 } as const;

/**
 * Um recorte colado na mesa que dá para arrastar com o mouse. Ao soltar fora da mesa (`bounds`),
 * ele volta para dentro medindo a posição real na tela, sem depender de limites calculados antes.
 * Funciona com mouse e com o dedo (o recorte tem `touch-action: none`, então o scroll da página
 * não começa em cima dele). Com "reduzir movimento", é só uma figura inclinada.
 */
export function DragCut({
	children,
	className,
	tilt,
	bounds,
	z,
	onRaise,
}: {
	children: ReactNode;
	className: string;
	/** inclinação do recorte, em graus */
	tilt: number;
	bounds: RefObject<HTMLElement | null>;
	/** ordem na pilha; o último recorte tocado recebe o maior */
	z?: number;
	onRaise: () => void;
}) {
	const reduce = useReducedMotion();
	const ref = useRef<HTMLElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	if (reduce) {
		return (
			<figure
				className={className}
				style={{ transform: `rotate(${tilt}deg)`, zIndex: z }}
			>
				{children}
			</figure>
		);
	}

	const backInside = () => {
		const b = bounds.current?.getBoundingClientRect();
		const r = ref.current?.getBoundingClientRect();
		if (!b || !r) return;
		let dx = 0;
		let dy = 0;
		if (r.left < b.left) dx = b.left - r.left;
		else if (r.right > b.right) dx = b.right - r.right;
		if (r.top < b.top) dy = b.top - r.top;
		else if (r.bottom > b.bottom) dy = b.bottom - r.bottom;
		if (dx) animate(x, x.get() + dx, BACK);
		if (dy) animate(y, y.get() + dy, BACK);
	};

	return (
		<motion.figure
			ref={ref}
			className={className}
			style={{ x, y, rotate: tilt, zIndex: z, cursor: "grab" }}
			drag
			dragMomentum={false}
			dragElastic={0}
			onPointerDown={onRaise}
			onDragEnd={backInside}
			whileDrag={{ scale: 1.04, cursor: "grabbing" }}
		>
			{children}
		</motion.figure>
	);
}
