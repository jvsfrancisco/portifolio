import "react";

declare module "react" {
	/** Permite variáveis CSS (--x) direto em style={{ }}. */
	interface CSSProperties {
		[key: `--${string}`]: string | number | undefined;
	}
}
