import { useMemo, useState } from "react";

/** Linhas de projeto (a faixa que abre e fecha). */
type RowId = "Azzas" | "Quazz" | "Serena" | "Cli";
/** Fichas "o projeto em detalhe": só uma aberta por vez. */
type FichaId = "serena" | "azzas" | "quazz" | "bem" | "delei" | "tudo";

export type ProjectHoles = {
	[K in RowId as `pj${K}Open`]: boolean;
} & {
	[K in RowId as `pj${K}Exp`]: boolean;
} & {
	[K in RowId as `pj${K}Hint`]: string;
} & {
	[K in RowId as `pickPj${K}`]: () => void;
} & {
	[K in FichaId as `${K}Open`]: boolean;
} & {
	[K in FichaId as `${K}Exp`]: boolean;
} & {
	[K in FichaId as `${K}Cls`]: string;
} & {
	[K in FichaId as `${K}Hint`]: string;
} & {
	[K in FichaId as `pick${Capitalize<K>}`]: () => void;
};

const rows: RowId[] = ["Azzas", "Quazz", "Serena", "Cli"];
const fichas: FichaId[] = ["serena", "azzas", "quazz", "bem", "delei", "tudo"];

/**
 * Estado da seção de projetos: qual linha está aberta (uma só; abrir outra fecha a anterior) e qual ficha está aberta (uma só).
 * A linha da Serena abre de saída, porque é o projeto de maior peso.
 */
export function useProjectHoles(): ProjectHoles {
	const [openRow, setOpenRow] = useState<RowId | null>("Serena");
	const [ficha, setFicha] = useState<FichaId | null>(null);

	return useMemo(() => {
		const h: Record<string, boolean | string | (() => void)> = {};
		for (const id of rows) {
			const open = openRow === id;
			h[`pj${id}Open`] = open;
			h[`pj${id}Exp`] = open;
			h[`pj${id}Hint`] = open ? "fechar" : "abrir";
			h[`pickPj${id}`] = () => setOpenRow((cur) => (cur === id ? null : id));
		}
		for (const id of fichas) {
			const open = ficha === id;
			const cap = id.charAt(0).toUpperCase() + id.slice(1);
			h[`${id}Open`] = open;
			h[`${id}Exp`] = open;
			h[`${id}Cls`] = open ? "on" : "";
			h[`${id}Hint`] = open ? "fechar ficha" : "abrir ficha";
			h[`pick${cap}`] = () => setFicha((cur) => (cur === id ? null : id));
		}
		return h as ProjectHoles;
	}, [openRow, ficha]);
}
