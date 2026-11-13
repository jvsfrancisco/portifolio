import { createFileRoute } from "@tanstack/react-router";
import { About } from "#/components/sections/About";
import { AiSection } from "#/components/sections/ai/AiSection";
import { Hero } from "#/components/sections/Hero";
import { ProjectsSection } from "#/components/sections/projects/ProjectsSection";
import { ResumeSection } from "#/components/sections/ResumeSection";
import { SiteFooter } from "#/components/sections/SiteFooter";
import { SiteHeader } from "#/components/sections/SiteHeader";
import { SkillsSection } from "#/components/sections/SkillsSection";

export const Route = createFileRoute("/")({ component: Home });

/** A página só compõe as seções, na ordem em que aparecem. Cada seção lê o seu conteúdo de src/content. */
function Home() {
	return (
		<div className="mesa">
			<SiteHeader />
			<main id="conteudo">
				<Hero />
				<About />
				<ProjectsSection />
				<div
					className="wrap"
					style={{ paddingTop: "72px", paddingBottom: "72px" }}
				>
					<AiSection />
				</div>
				<SkillsSection />
				<ResumeSection />
			</main>
			<SiteFooter />
		</div>
	);
}
