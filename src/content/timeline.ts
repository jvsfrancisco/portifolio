import type { TimelineEvent } from "./types";

/**
 * Currículo, do mais recente para o mais antigo dentro de cada tipo.
 * Para acrescentar um período, inclua um evento com `kind` "work" ou "study".
 */
export const timeline: TimelineEvent[] = [
	{
		id: "quazz",
		kind: "work",
		place: "Quazz",
		role: "minha consultoria em parceria",
		body: "Desenvolvi o sistema da Serena Biquínis, no ar desde 19/09/2026, e os sites de Bem Trajados, Açaí de Lei, Tudo Aqui Marketing e Ostra Art, de Rio das Ostras.",
		period: "jun/2026 até hoje",
	},
	{
		id: "azzas",
		kind: "work",
		place: "Azzas 2154",
		role: "estágio de dev web",
		body: "E-commerce das marcas do grupo (Animale, BYNV, Off Premium, Cris Barros, FARM, Fábula, Maria Filó, Foxton e outras), e-mails transacionais e correções pontuais.",
		period: "jan/2025 até hoje",
		details: {
			summary: "Tudo o que fiz na Azzas, em detalhe",
			groups: [
				{
					heading: "No e-commerce, em todas as marcas",
					points: [
						"Desenvolvo e mantenho o e-commerce VTEX de Animale, BYNV, Off Premium, Cris Barros, FARM, FARM Etc, Fábula, Carol Bassi, Maria Filó e Foxton.",
						"Mudanças que se repetem entre as marcas: Pix parcelado do Pagaleve, banners do Pagaleve, texto de opt-in da newsletter e o botão de revisão do pagamento.",
						"Animale e FARM: correção de bugs e de layout shift no checkout.",
						"Animale: cupom e código de vendedor que voltavam depois de removidos, e um pipeline de release do checkout.",
						"Estudo para esconder a promissória (forma de pagamento das trocas) do checkout, com a solução definida junto da VTEX: isolá-la em outra política comercial.",
						"Integrei o checkout às APIs REST da VTEX e ao Master Data.",
						"Auditei o repositório da BYNV e transformei o resultado num backlog de 22 issues.",
					],
				},
				{
					heading: "E-mails transacionais",
					points: [
						"Templates de e-mail para Cris Barros, BYNV, FARM, Off Premium e outras marcas do grupo: confirmação, pagamento aprovado, enviado, entregue, cancelado e troca.",
					],
				},
				{
					heading: "Na BYNV",
					points: [
						"Stories de produto: o visualizador, a capa de cada página e até 6 produtos por story, com o minicart embutido para comprar sem sair.",
						"Pós-compra: botão de pedido personalizado e aviso antifraude na página de pedido concluído.",
						"Tip bar no minicart, ligada ao Master Data.",
						"Horário de atendimento do FAQ editável pelo Site Editor.",
					],
				},
				{
					heading: "Na FARM Rio",
					points: [
						"Buscador de lojas com geolocalização, que acha as lojas mais próximas de quem pesquisa, e correção dos filtros de estado e cidade.",
						"Horário de atendimento do Fala Farm editável pelo CMS.",
						"Site FARM Global: correção de um bug e do tamanho da mochila, e das bandeiras de país.",
						"Ao limpar os filtros da busca, o termo sumia da URL e a página ficava num estado quebrado: corrigi.",
						"O minicart mostrava brinde como sem estoque: corrigi.",
						"Ajustes no botão de ajuda flutuante, que já existia.",
					],
				},
				{
					heading: "Na Animale e na Off Premium",
					points: [
						"Animale: correção de um carregamento infinito na lista de desejos.",
						"Off Premium: atualização do checkout para o rebranding da marca, com ajustes de CSS para ficar fiel à identidade atual.",
					],
				},
			],
		},
	},
	{
		id: "mdm",
		kind: "work",
		place: "MDM Sistemas",
		role: "estágio",
		body: "Interfaces em React com Styled-components consumindo APIs REST, e protótipos no Figma.",
		period: "2024",
	},
	{
		id: "itshare",
		kind: "work",
		place: "ITShare",
		role: "analista de TI júnior",
		body: "Remoto. Renovei com CSS a identidade de um app em Oracle APEX, integrei uma plataforma de documentação ao PostgreSQL e fiz suporte.",
		period: "2023 a 2024",
	},
	{
		id: "puc",
		kind: "study",
		place: "PUC-Rio",
		role: "Ciência da Computação",
		body: "Formatura prevista para dez/2027.",
		period: "ago/2022 até hoje",
	},
	{
		id: "driven",
		kind: "study",
		place: "Driven",
		role: "bootcamp",
		body: "Desenvolvimento web full stack.",
		period: "jan a out/2022 · 10 meses",
	},
];
