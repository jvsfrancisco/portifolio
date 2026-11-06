import type { ComponentType } from "react";
import type { AiPanelId } from "#/content/types";
import { BrainPanel } from "./BrainPanel";
import { HarnessPanel } from "./HarnessPanel";
import { OrquestracaoPanel } from "./OrquestracaoPanel";
import { SerenaAiPanel } from "./SerenaAiPanel";
import { TucanoPanel } from "./TucanoPanel";

/** Cada aba tem a sua visualização; o texto fica dentro do painel. Para criar uma nova, acrescente aqui e em content/ai.ts. */
export const aiPanels: Record<AiPanelId, ComponentType> = {
	orq: OrquestracaoPanel,
	brain: BrainPanel,
	harn: HarnessPanel,
	tuc: TucanoPanel,
	ai: SerenaAiPanel,
};
