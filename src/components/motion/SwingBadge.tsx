import {
	animate,
	motion,
	useMotionValue,
	useReducedMotion,
	useTransform,
} from "motion/react";
import { type ReactNode, useEffect, useState } from "react";
import { useMedia } from "./useFinePointer";

/**
 * Crachá retrátil: balança de leve e dá para puxar para qualquer lado, com mouse ou com o dedo.
 * O cordão sai de um ponto fixo lá em cima: estica e inclina até o cartão, que gira junto.
 * Passando do limite, o cordão resiste como elástico; ao soltar, a mola recolhe tudo de volta. No computador o cordão sobe até o cabeçalho;
 * no celular, onde o crachá fica embaixo do texto, ele é curto.
 */
export function SwingBadge({ children }: { children: ReactNode }) {
	const reduce = useReducedMotion();
	const narrow = useMedia("(max-width: 900px)");
	/** o comprimento do cordão depende da largura da tela, que o servidor não sabe: ele só aparece no cliente */
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	const rope = narrow ? 84 : 400;
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	// o cartão nunca passa acima do ponto onde o cordão está preso, então o ângulo não vira do avesso
	const angle = useTransform(
		[x, y],
		([vx, vy]: number[]) =>
			(-Math.atan2(vx, Math.max(rope + vy, 24)) * 180) / Math.PI,
	);
	const length = useTransform(
		[x, y],
		([vx, vy]: number[]) => Math.hypot(vx, Math.max(rope + vy, 24)) + 14,
	);
	/** volta para o lugar com mola, a partir de onde e com a velocidade que o dedo soltou */
	const release = (vx: number, vy: number) => {
		const spring = { type: "spring", stiffness: 300, damping: 15 } as const;
		animate(x, 0, { ...spring, velocity: vx });
		animate(y, 0, { ...spring, velocity: vy });
	};

	if (reduce) {
		return (
			<div className="ed-badge-wrap">
				{mounted && (
					<span
						className="ed-lanyard"
						aria-hidden="true"
						style={{ top: -rope, height: rope + 14 }}
					/>
				)}
				{children}
			</div>
		);
	}

	return (
		<motion.div
			className="ed-badge-wrap"
			style={{ transformOrigin: `50% -${rope}px` }}
			animate={{ rotate: [0, 0.8, 0, -0.8, 0] }}
			transition={{
				duration: 7,
				repeat: Number.POSITIVE_INFINITY,
				ease: "easeInOut",
			}}
		>
			{mounted && (
				<motion.span
					className="ed-lanyard"
					aria-hidden="true"
					style={{ top: -rope, rotate: angle, height: length }}
				/>
			)}
			<motion.div
				style={{
					x,
					y,
					rotate: angle,
					transformOrigin: "50% 0%",
					position: "relative",
					cursor: "grab",
					touchAction: "none",
				}}
				drag
				dragMomentum={false}
				dragConstraints={{
					left: -160,
					right: 160,
					top: -Math.min(60, rope - 24),
					bottom: 200,
				}}
				dragElastic={0.18}
				onDragEnd={(_, info) => release(info.velocity.x, info.velocity.y)}
				whileDrag={{ cursor: "grabbing" }}
			>
				{children}
			</motion.div>
		</motion.div>
	);
}
