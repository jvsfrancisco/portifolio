import {
	siC,
	siClaude,
	siCss,
	siDocker,
	siFigma,
	siGit,
	siGithubactions,
	siGoogleanalytics,
	siGooglegemini,
	siJavascript,
	siMedusa,
	siNextdotjs,
	siNodedotjs,
	siOpenjdk,
	siOpentelemetry,
	siPostgresql,
	siPython,
	siReact,
	siRedis,
	siStyledcomponents,
	siTailwindcss,
	siTypescript,
	siVercel,
	siVtex,
} from "simple-icons";
import { antigravityIcon, codexIcon } from "./icons";
import type { SkillGroup } from "./types";

/**
 * Skills agrupadas pelo lugar onde cada uma foi usada. Para incluir uma, acrescente o nome na lista do grupo certo.
 * Ícone vem do pacote `simple-icons` (path de um SVG 24x24) ou de `./icons`. Quem não tem ícone vira etiqueta de texto.
 */
export const skillGroups: SkillGroup[] = [
	{
		title: "A base",
		label: "Linguagens e base",
		items: [
			{ name: "JavaScript", icon: siJavascript.path },
			{ name: "TypeScript", icon: siTypescript.path },
			{ name: "React", icon: siReact.path },
			{ name: "Node.js", icon: siNodedotjs.path },
		],
	},
	{
		title: "Serena Biquínis",
		label: "Skills usadas na Serena",
		items: [
			{ name: "Medusa v2", icon: siMedusa.path },
			{ name: "PostgreSQL", icon: siPostgresql.path },
			{ name: "Redis", icon: siRedis.path },
			{ name: "Docker", icon: siDocker.path },
			{ name: "GitHub Actions", icon: siGithubactions.path },
			{ name: "OpenTelemetry", icon: siOpentelemetry.path },
			{ name: "IndexedDB" },
			{ name: "Oracle Cloud" },
		],
	},
	{
		title: "Azzas 2154",
		label: "Skills usadas na Azzas 2154",
		items: [
			{ name: "VTEX IO", icon: siVtex.path },
			{ name: "VTEX FastStore" },
			{ name: "VTEX legacy" },
			{ name: "Master Data" },
			{ name: "Deco CMS" },
			{ name: "APIs REST" },
		],
	},
	{
		title: "Sites da Quazz e dos clientes",
		label: "Skills usadas nos sites",
		items: [
			{ name: "Next.js", icon: siNextdotjs.path },
			{ name: "Tailwind", icon: siTailwindcss.path },
			{ name: "Vercel", icon: siVercel.path },
			{ name: "GitHub Actions", icon: siGithubactions.path },
			{ name: "GA4", icon: siGoogleanalytics.path },
			{ name: "Clarity" },
			{ name: "SEO" },
		],
	},
	{
		title: "MDM Sistemas e ITShare",
		label: "Skills usadas na MDM e na ITShare",
		items: [
			{ name: "React", icon: siReact.path },
			{ name: "styled-components", icon: siStyledcomponents.path },
			{ name: "Figma", icon: siFigma.path },
			{ name: "CSS", icon: siCss.path },
			{ name: "PostgreSQL", icon: siPostgresql.path },
			{ name: "APIs REST" },
			{ name: "Oracle APEX" },
		],
	},
	{
		title: "Na faculdade",
		label: "Linguagens da faculdade",
		items: [
			{ name: "Java", icon: siOpenjdk.path },
			{ name: "C", icon: siC.path },
			{ name: "Python", icon: siPython.path },
		],
	},
	{
		title: "No dia a dia",
		label: "Ferramentas de dia a dia",
		items: [
			{ name: "Claude Code", icon: siClaude.path },
			{ name: "Gemini", icon: siGooglegemini.path },
			{ name: "Git", icon: siGit.path },
			{ name: "Codex", icon: codexIcon, evenodd: true },
			{ name: "Antigravity", icon: antigravityIcon },
			{ name: "Gitleaks" },
		],
	},
];
