import { useSyncExternalStore } from "react";

/**
 * Lê uma media query e acompanha a mudança. No servidor é falso, então o HTML sai no estado
 * "sem a condição" e o cliente ajusta depois de montar.
 */
export function useMedia(query: string) {
	return useSyncExternalStore(
		(onChange) => {
			const mq = window.matchMedia(query);
			mq.addEventListener("change", onChange);
			return () => mq.removeEventListener("change", onChange);
		},
		() => window.matchMedia(query).matches,
		() => false,
	);
}
