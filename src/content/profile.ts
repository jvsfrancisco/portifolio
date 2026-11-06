import type { ContactLink, NavItem } from "./types";

export const profile = {
	name: ["João Victor", "Francisco"],
	navName: "J. V. Francisco",
	role: "Desenvolvedor web full stack no Rio de Janeiro: TypeScript, React, Next.js e Node.js.",
	/** Foto do hero. Texto alternativo descreve a imagem, não a pessoa em abstrato. */
	photo: {
		src: "/img/joao.png",
		alt: "Foto de João Victor Francisco, sorrindo, de camiseta preta",
		caption: "Olá =)",
	},
};

/**
 * PENDENTE: subir o PDF em public/ com este nome antes de publicar.
 * Enquanto o arquivo não existir, o botão baixa uma página 404.
 */
export const cvHref = "/cv-joao-victor-francisco.pdf";

export const nav: NavItem[] = [
	{ label: "Projetos", href: "#projetos" },
	{ label: "IA", href: "#ia" },
	{ label: "Skills", href: "#skills" },
	{ label: "Trajeto", href: "#trajeto" },
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

/** As cinco linhas do resumo de 30 segundos. */
export const summary: Array<{
	id: string;
	text: string;
	link?: { label: string; href: string };
}> = [
	{
		id: "serena",
		text: "Fiz o sistema da Serena Biquínis, em produção desde 19/09/2026.",
	},
	{
		id: "azzas",
		text: "Estágio na Azzas 2154: e-commerce das marcas do grupo (Animale, BYNV, Off Premium, Cris Barros, FARM, Fábula, Maria Filó, Foxton e outras), e-mails transacionais e correções pontuais.",
	},
	{
		id: "quazz",
		text: "Quazz, minha consultoria em parceria: eu construo os sites dos clientes.",
	},
	{
		id: "ia",
		text: "Uso IA para programar, com regras: ela não publica nada sem o meu sim, e tela só conta como pronta depois que eu vejo.",
		link: { label: "Ver como", href: "#ia" },
	},
	{
		id: "puc",
		text: "Ciência da Computação na PUC-Rio, formatura prevista para dez/2027.",
	},
];
