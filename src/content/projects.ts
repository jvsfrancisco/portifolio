import type { Project } from "./types";

/**
 * Projetos do carrossel, na ordem em que aparecem.
 * Para acrescentar um (ex.: Feiras Cariocas), inclua uma entrada aqui com imagens reais em public/img.
 * Não inclua entrada sem material: nada é inventado.
 */
export const projects: Project[] = [
	{
		id: "serena",
		kind: "Quazz · sistema de loja",
		title: "Serena Biquínis",
		summary:
			"Loja de moda praia no Engenho Novo, no Rio, que vende no balcão e pelo WhatsApp. Antes não registrava nenhuma venda. Fiz o sistema do PDV ao financeiro, em produção desde 19/09/2026.",
		stack: ["Medusa v2", "PostgreSQL", "Redis", "Docker", "Oracle Cloud"],
		images: [
			{
				src: "/img/serena-pdv-desktop.jpg",
				width: 1200,
				height: 508,
				alt: "PDV da Serena no computador: vitrine de biquínis com os tamanhos em estoque e o carrinho ao lado",
			},
			{
				src: "/img/serena-pdv-mobile.jpg",
				width: 390,
				height: 650,
				alt: "PDV da Serena aberto no celular, na tela da vitrine",
			},
			{
				src: "/img/serena-links.jpg",
				width: 1200,
				height: 675,
				alt: "Página de links da Serena Biquínis, com fotos da loja e botão de atendimento pelo WhatsApp",
			},
			{
				src: "/img/serena-financeiro.jpg",
				width: 1200,
				height: 375,
				alt: "Topo do painel financeiro da Serena, com o título Setembro",
			},
			{
				src: "/img/serena-pdv-carrinho.jpg",
				width: 324,
				height: 430,
				alt: "Recorte ampliado do carrinho do PDV, com uma peça, cupom e o botão Cobrar",
			},
			{
				src: "/img/serena-arara.jpg",
				width: 356,
				height: 392,
				alt: "Foto da arara de biquínis dentro da loja Serena",
			},
		],
		metrics: [
			{ value: "+R$ 15 mil", label: "em vendas registradas desde 19/09/2026" },
			{
				value: "571 commits",
				label: "e 69 pull requests de junho a outubro de 2026",
			},
			{ value: "11 módulos", label: "próprios em cima do Medusa v2" },
		],
		more: {
			label: "Ver mais sobre a Serena",
			groups: [
				{
					heading: "O que eu fiz",
					points: [
						"PDV que vende mesmo sem internet, no computador e no celular.",
						"Abertura e fechamento de caixa, cashback e troca no balcão.",
						"Painel financeiro: fluxo de caixa, contas a pagar, DRE e conciliação bancária.",
						"A página de links da loja.",
						"Deploy com 4 pipelines e rollback por SHA.",
					],
				},
				{
					heading: "Por dentro",
					points: [
						"PDV como PWA offline-first: sem internet, a venda vai para uma fila no IndexedDB e sincroniza numa rota idempotente, sem duplicar pedido.",
						"Painel financeiro: fluxo de caixa, contas a pagar, DRE, conciliação bancária por CSV, meta do mês e Web Push.",
						"Medusa v2 com 11 módulos próprios, PostgreSQL e Redis, em Docker na Oracle Cloud.",
						"Deploy com 4 pipelines no GitHub Actions, rollback por SHA, OpenTelemetry e Grafana Cloud.",
					],
				},
				{
					heading: "Bastidores",
					stories: [
						{
							title: "O cashback parou de cair",
							body: "Nenhum erro, e nenhum cashback. O grafo de pedidos do Medusa devolvia items.quantity como undefined. Passei a ler items.detail.quantity.",
						},
						{
							title: "Catálogo de ~4,3 s para ~0,5 s",
							body: "Mediana em produção, com 170 produtos e 647 variantes. Fiz as consultas em paralelo, cortei uma relação que custava ~1,2 s e pus cache invalidado por evento: 474 ms sem o cache, 45 ms com ele.",
						},
						{
							title: "Troca de banco com 49 s fora do ar",
							body: "Do Neon para PostgreSQL numa VM da Oracle Cloud, com 153 tabelas conferidas. Uma query foi de ~125 ms para menos de 1 ms. O Neon ficou guardado para rollback. Foi antes de a loja começar a usar o sistema.",
						},
					],
				},
			],
			note: "Sistema interno da loja, sem link público. As telas aparecem aqui com autorização da dona.",
		},
	},
	{
		id: "quazz",
		kind: "Quazz · site da consultoria",
		title: "Quazz",
		summary:
			"O site da consultoria. Fiz em Next.js com Tailwind, com deploy contínuo na Vercel via GitHub Actions.",
		stack: ["Next.js", "Tailwind", "Vercel", "GitHub Actions"],
		images: [
			{
				src: "/img/quazz-home-desktop.png",
				width: 1440,
				height: 900,
				alt: "Site da Quazz no computador: o título A venda cresceu, a organização não acompanhou, com um cristal roxo ao lado",
			},
			{
				src: "/img/quazz-home-mobile.png",
				width: 390,
				height: 844,
				alt: "Site da Quazz no celular, com o cristal roxo em cima do título",
			},
			{
				src: "/img/quazz-ia-fluxo.png",
				width: 1240,
				height: 1055,
				alt: "Página IA e software da Quazz: fluxo em três passos, a Ametista lê, uma pessoa da Quazz confere, você escolhe, e a linha do tempo Do problema à decisão",
			},
			{
				src: "/img/quazz-metodo.png",
				width: 1200,
				height: 860,
				alt: "Página Como a gente trabalha da Quazz: o método em quatro passos, começando por Entender",
			},
			{
				src: "/img/quazz-hub.png",
				width: 1200,
				height: 800,
				alt: "Tela do Quazz Hub, a área do cliente, com os cartões Caixa, Painel financeiro e Site e CMS, com dados de exemplo",
			},
		],
		link: { label: "Abrir quazz.com.br", href: "https://www.quazz.com.br" },
	},
	{
		id: "bem-trajados",
		kind: "Quazz · site de cliente",
		title: "Bem Trajados",
		summary:
			"Site de uma loja de streetwear masculino em Jacaré. Fiz em Next.js com Tailwind.",
		stack: ["Next.js", "Tailwind"],
		images: [
			{
				src: "/img/bem-desktop.jpg",
				width: 1200,
				height: 679,
				alt: "Site da Bem Trajados no computador",
			},
			{
				src: "/img/bem-mobile.png",
				width: 390,
				height: 680,
				alt: "Site da Bem Trajados no celular, com o título Os crias se destacam na BT",
			},
			{
				src: "/img/bem-secao.png",
				width: 1440,
				height: 800,
				alt: "Seção de marcas do site da Bem Trajados: Nike, Hurley, Hang Loose, Oakley, Jordan, Adidas e outras",
			},
			{
				src: "/img/bem-manchete.jpg",
				width: 590,
				height: 330,
				alt: "Recorte da manchete do site, Os crias se destacam na BT",
			},
		],
		link: {
			label: "Abrir bemtrajados.quazz.com.br",
			href: "https://bemtrajados.quazz.com.br",
		},
	},
	{
		id: "acai-de-lei",
		kind: "Quazz · site de cliente",
		title: "Açaí de Lei",
		summary: "Site de um delivery de açaí. Fiz em Next.js com Tailwind.",
		stack: ["Next.js", "Tailwind"],
		images: [
			{
				src: "/img/delei-desktop.jpg",
				width: 1200,
				height: 750,
				alt: "Site do Açaí de Lei no computador",
			},
			{
				src: "/img/delei-mobile.jpg",
				width: 390,
				height: 760,
				alt: "Site do Açaí de Lei no celular",
			},
			{
				src: "/img/delei-secao.png",
				width: 1440,
				height: 800,
				alt: "Seção do site do Açaí de Lei com a cadeira de plástico e a frase do primeiro post da marca",
			},
			{
				src: "/img/delei-selo.jpg",
				width: 476,
				height: 476,
				alt: "Recorte do selo De Lei, com a cadeira de plástico no centro",
			},
		],
		link: {
			label: "Abrir delei.quazz.com.br",
			href: "https://delei.quazz.com.br",
		},
	},
	{
		id: "ostra-art",
		kind: "Quazz · site de cliente",
		title: "Ostra Art",
		summary:
			"Duas frentes da mesma empresa em Rio das Ostras: site de chinelos com catálogo e personalizador pelo WhatsApp, e páginas de links para chinelos e armarinho.",
		stack: ["React", "Vite", "Vercel"],
		images: [
			{
				src: "/img/ostraart-desktop.jpg",
				width: 1200,
				height: 720,
				alt: "Site da Ostra Art no computador, com o título O seu par. A sua cara. e um par de Havaianas",
			},
			{
				src: "/img/ostraart-links.jpg",
				width: 390,
				height: 680,
				alt: "Página de links da Ostra Art no celular, com os canais da loja e acesso ao mapa",
			},
			{
				src: "/img/ostraart-catalogo.jpg",
				width: 1200,
				height: 720,
				alt: "Carrossel de pingentes da Ostra Art na seção Escolha o seu enfeite",
			},
			{
				src: "/img/ostraart-personalizador.jpg",
				width: 1200,
				height: 720,
				alt: "Personalizador da Ostra Art com um par de Havaianas Slim centralizado",
			},
		],
		links: [
			{
				label: "Site de chinelos",
				href: "https://ostraart.chinelos.quazz.com.br",
			},
			{
				label: "Links do armarinho",
				href: "https://ostraart.quazz.com.br",
			},
		],
	},
	{
		id: "tudo-aqui",
		kind: "Quazz · site de cliente",
		title: "Tudo Aqui Marketing",
		summary: "Site de uma agência de marketing. Fiz em Next.js com Tailwind.",
		stack: ["Next.js", "Tailwind"],
		images: [
			{
				src: "/img/tudo-desktop.jpg",
				width: 1200,
				height: 725,
				alt: "Site da Tudo Aqui Marketing no computador",
			},
			{
				src: "/img/tudo-mobile.jpg",
				width: 390,
				height: 760,
				alt: "Site da Tudo Aqui Marketing no celular",
			},
			{
				src: "/img/tudo-secao.png",
				width: 1440,
				height: 800,
				alt: "Seção O que fazemos do site da Tudo Aqui Marketing, com a faixa amarela e o serviço Dar forma à sua marca",
			},
			{
				src: "/img/tudo-historias.png",
				width: 1440,
				height: 1360,
				alt: "Seção Mais que projetos do site da Tudo Aqui Marketing: o número 822 cliques para contato e os cartões dos negócios atendidos",
			},
			{
				src: "/img/tudo-jeito.png",
				width: 1440,
				height: 820,
				alt: "Seção Para contar sua história do site da Tudo Aqui Marketing, com a foto de um cliente assinando e os três passos do jeito de trabalhar",
			},
		],
		link: {
			label: "Abrir tudoaquimarketing.com",
			href: "https://tudoaquimarketing.com",
		},
	},
];
