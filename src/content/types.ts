/** Formas dos dados do site. Os textos vivem em src/content/*.ts; os componentes só desenham. */

export type SkillItem = {
	name: string;
	/** path de um SVG 24x24 com a logo em tinta; sem ele, a skill vira etiqueta de texto */
	icon?: string;
	/** o path usa fill-rule evenodd (desenho com furos) */
	evenodd?: boolean;
};

export type SkillGroup = {
	title: string;
	/** rótulo da lista para leitores de tela */
	label: string;
	items: SkillItem[];
};

export type ProjectImage = {
	src: string;
	width: number;
	height: number;
	alt: string;
};

export type ProjectStory = { title: string; body: string };

/** Texto longo de um projeto: fica fechado e abre num painel que rola dentro do card. */
export type ProjectMore = {
	/** texto do botão, ex.: "Ver mais sobre a Serena" */
	label: string;
	groups: Array<{
		heading: string;
		points?: string[];
		stories?: ProjectStory[];
	}>;
	note?: string;
};

export type Project = {
	id: string;
	/** tipo do trabalho, em uma linha: "Quazz · sistema de loja" */
	kind: string;
	title: string;
	summary: string;
	stack: string[];
	/** a primeira imagem é a principal; as outras entram como recortes por cima */
	images: ProjectImage[];
	link?: { label: string; href: string };
	links?: Array<{ label: string; href: string }>;
	/** texto longo, aberto sob demanda (opcional) */
	more?: ProjectMore;
	/** números do projeto, exatamente como medidos */
	metrics?: Array<{ value: string; label: string }>;
};

export type TimelineGroup = { heading: string; points: string[] };

export type TimelineEvent = {
	id: string;
	/** `work` aparece em Experiência; `study` em Formação */
	kind: "work" | "study";
	place: string;
	role: string;
	body: string;
	/** período, no formato do site: "jan/2025 até hoje" */
	period: string;
	/** detalhe que abre sob demanda */
	details?: { summary: string; groups: TimelineGroup[] };
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

export type BadgeRow = { label: string; value: string };
