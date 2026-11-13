import type { BadgeRow, ContactLink, NavItem, ProjectImage } from "./types";

export const profile = {
	name: ["João Victor", "Francisco"],
	navName: "J. V. Francisco",
	role: "Desenvolvedor web full stack no Rio de Janeiro: TypeScript, React, Next.js e Node.js.",
	/** Foto do crachá. Texto alternativo descreve a imagem, não a pessoa em abstrato. */
	photo: {
		src: "/img/joao.png",
		alt: "Foto de João Victor Francisco, sorrindo, de camiseta preta",
	},
};

export const cvHref = "/cv-joao-victor-francisco.pdf";

export const nav: NavItem[] = [
	{ label: "Sobre", href: "#sobre" },
	{ label: "Projetos", href: "#projetos" },
	{ label: "IA", href: "#ia" },
	{ label: "Habilidades", href: "#habilidades" },
	{ label: "Currículo", href: "#curriculo" },
	{ label: "Contato", href: "#contato" },
];

export const contact: ContactLink[] = [
	{
		label: "jvictor.franci@gmail.com",
		href: "mailto:jvictor.franci@gmail.com",
	},
	{
		label: "github.com/jvsfrancisco",
		href: "https://github.com/jvsfrancisco",
		external: true,
	},
	{
		label: "linkedin.com/in/jvsfrancisco",
		href: "https://linkedin.com/in/jvsfrancisco",
		external: true,
	},
];

/** Linhas do crachá do hero. */
export const badge: BadgeRow[] = [
	{ label: "Local", value: "Rio de Janeiro" },
	{ label: "Hoje", value: "Azzas 2154 · Quazz" },
	{ label: "Estuda", value: "Ciência da Computação, PUC-Rio" },
	{ label: "No ar", value: "Serena, desde 19/09/2026" },
];

/**
 * O Sobre. `lead` é a frase grande; o resto é texto corrido.
 * CONFIRMAR com o João: "um dos maiores grupos de moda da América Latina" e a lista de marcas do grupo
 * (a empresa se apresenta como o maior; houve notícia de separação entre Arezzo&Co e Soma).
 */
export const about = {
	lead: "Sou estagiário de dev web na Azzas 2154, um dos maiores grupos de moda da América Latina.",
	paragraphs: [
		"Lá eu trabalho no e-commerce das marcas do grupo: checkout, e-mails transacionais, correções gerais e criação de novas features.",
		"Tenho a Quazz, consultoria de sites e sistemas para pequenos negócios, que toco em parceria. O primeiro sistema, o caixa e financeiro de uma loja de biquínis, está no ar desde 19/09/2026, com mais de R$ 15 mil em vendas.",
		"Curso Ciência da Computação na PUC-Rio, com formatura prevista para dez/2027.",
	],
};

/** Recortes das marcas da Azzas, na ordem em que são colados na mesa do Sobre. `label` é a etiqueta de cada um. */
export const azzasShots: Array<ProjectImage & { label: string }> = [
	{
		src: "/img/farm-home.jpg",
		width: 1186,
		height: 657,
		alt: "Home pública da FARM Rio; não fiz a home, trabalho em ajustes do site",
		label: "FARM Rio",
	},
	{
		src: "/img/animale-home.jpg",
		width: 900,
		height: 541,
		alt: "Home pública da Animale. Não fiz esta página, trabalho na loja",
		label: "Animale",
	},
	{
		src: "/img/bynv-home.jpg",
		width: 900,
		height: 425,
		alt: "Home pública da BYNV. Não fiz esta página, trabalho na loja",
		label: "BYNV",
	},
	{
		src: "/img/farm-etc-home.jpg",
		width: 1200,
		height: 680,
		alt: "Site público da FARM Etc. Não fiz esta página, trabalho na loja",
		label: "FARM Etc",
	},
];

export const azzasShotsCaption =
	"Algumas das marcas em cujos e-commerces trabalho.";
