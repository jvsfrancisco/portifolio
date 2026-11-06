import { createFileRoute } from "@tanstack/react-router";
import { AiSection } from "#/components/sections/ai/AiSection";
import { Hero } from "#/components/sections/Hero";
import { ProjectsSection } from "#/components/sections/projects/ProjectsSection";
import { SiteFooter } from "#/components/sections/SiteFooter";
import { SiteHeader } from "#/components/sections/SiteHeader";
import { SkillsSection } from "#/components/sections/SkillsSection";
import { TimelineSection } from "#/components/sections/TimelineSection";

export const Route = createFileRoute("/")({ component: Home });

/** A página só compõe as seções, na ordem em que aparecem. Cada seção lê o seu conteúdo de src/content. */
function Home() {
	return (
		<div className="mesa">
			<SiteHeader />
			<main id="conteudo">
				<div className="wrap" style={{ paddingBottom: "40px" }}>
					<Hero />
					<ProjectsSection />
					<AiSection />
					<SkillsSection />
					<TimelineSection />
				</div>
			</main>
			<SiteFooter />
		</div>
	);
}
