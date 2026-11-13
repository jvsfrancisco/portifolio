import { useState } from "react";
import { aiDefaultOpen, aiSpines } from "#/content/ai";
import type { AiPanelId } from "#/content/types";
import { AiHeader } from "./AiHeader";
import { aiPanels } from "./panels";

/**
 * IA: cinco abas. A escolhida abre para o lado (desdobra, no CSS) e as outras encolhem.
 * Todos os painéis ficam montados e só o aberto aparece (CSS): assim a altura da seção é a do painel mais alto e a página não pula.
 */
export function AiSection() {
	const [open, setOpen] = useState<AiPanelId | null>(aiDefaultOpen);

	return (
		<section
			id="ia"
			aria-labelledby="ia-t"
			style={{ paddingTop: "96px", position: "relative" }}
		>
			<AiHeader />
			<div className="gvs">
				{aiSpines.map((spine) => {
					const isOpen = open === spine.id;
					const Panel = aiPanels[spine.id];
					return (
						// biome-ignore lint/a11y/useSemanticElements: fieldset traz borda e min-width próprios que quebram o flex das abas
						<div
							key={spine.id}
							className={isOpen ? "gv on" : "gv"}
							role="group"
							aria-label={spine.label}
							style={{ "--sp": spine.paper, "--spc": spine.ink }}
						>
							<button
								type="button"
								className="gv-b"
								onClick={() =>
									setOpen((current) => (current === spine.id ? null : spine.id))
								}
								aria-expanded={isOpen}
							>
								<span className="gv-n">{spine.n}</span>
								<span className="gv-t">{spine.title}</span>
							</button>
							<Panel />
						</div>
					);
				})}
			</div>
		</section>
	);
}
