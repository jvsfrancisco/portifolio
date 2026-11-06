import type { AiSpine } from "./types";

/** As cinco abas da seção de IA. A ordem aqui é a ordem na tela; o painel de cada uma está em components/sections/ai/panels. */
export const aiSpines: AiSpine[] = [
	{
		id: "orq",
		n: 1,
		title: "Orquestração",
		label: "Orquestração",
		paper: "#C9AB80",
		ink: "#141210",
	},
	{
		id: "brain",
		n: 2,
		title: "Brain",
		label: "Brain",
		paper: "#141210",
		ink: "#F3EFE6",
	},
	{
		id: "harn",
		n: 3,
		title: "Harness",
		label: "Harness da Serena",
		paper: "#DCD3E2",
		ink: "#141210",
	},
	{
		id: "tuc",
		n: 4,
		title: "Tucano",
		label: "Tucano",
		paper: "#EAE4D7",
		ink: "#141210",
	},
	{
		id: "ai",
		n: 5,
		title: "Serena AI",
		label: "Serena AI",
		paper: "#5B3F68",
		ink: "#FFFDF8",
	},
];

export const aiDefaultOpen = "orq" as const;
