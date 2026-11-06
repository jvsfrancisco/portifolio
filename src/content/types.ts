/** Formas dos dados do site. Os textos vivem em src/content/*.ts; os componentes só desenham. */

export type SkillItem = {
	name: string;
	/** inclinação do adesivo, em graus (só para os ícones) */
	tilt?: number;
	/** path de um SVG 24x24 com a logo em tinta (só para os ícones) */
	icon?: string;
};

export type SkillGroup = {
	title: string;
	/** rótulo da lista para leitores de tela */
	label: string;
	kind: "icons" | "tags";
	items: SkillItem[];
};

export type Tape = {
	side: "left" | "right";
	/** distância da borda, ex.: '30%' */
	at: string;
	/** rotação em graus */
	tilt: number;
	/** fita lilás listrada em vez da neutra */
	washi?: boolean;
};

export type TimelineEvent = {
	id: string;
	/** nome da empresa ou curso; vira etiqueta de rotuladora quando `label` */
	title: string;
	label?: boolean;
	body: string;
	/** período, no formato do site: "jan/2025 até hoje" */
	period: string;
	/** coluna da grade (anos 2022 a 2026) */
	col: string;
	/** linha da grade */
	row: number;
	tilt: number;
	/** `go` = em andamento (traço roxo); `pp` = papel branco; `cr` = papel creme */
	variants: Array<"go" | "papel" | "cr">;
	tape?: Tape;
	/** barra de duração: n anos na grade, começa em `ini` e termina em `fim` (em anos) */
	bar: { n: number; ini: number; fim: number };
};

export type AiPanelId = "orq" | "brain" | "harn" | "tuc" | "ai";

export type AiSpine = {
	id: AiPanelId;
	n: number;
	/** texto visível na aba */
	title: string;
	/** nome acessível do grupo */
	label: string;
	/** cor do papel da aba */
	paper: string;
	/** cor da tinta sobre o papel */
	ink: string;
};

export type ContactLink = {
	label: string;
	href: string;
	/** abre fora do site */
	external?: boolean;
};

export type NavItem = { label: string; href: string };
