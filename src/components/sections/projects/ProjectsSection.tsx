import { AzzasProject } from "./AzzasProject";
import { ChapterHeader } from "./ChapterHeader";
import { ClientesProject } from "./ClientesProject";
import { ProjectsHeader } from "./ProjectsHeader";
import { QuazzProject } from "./QuazzProject";
import { SerenaProject } from "./SerenaProject";
import { useProjectHoles } from "./useProjectHoles";

/**
 * Projetos, um por vez. Cada projeto é uma linha que abre (e, dentro dela, uma ficha).
 * Para acrescentar um (Feiras Cariocas, Hub da Quazz): crie `XProject.tsx` ao lado e inclua aqui, no lugar certo da ordem.
 * O capítulo Quazz (`.capq`) junta tudo o que nasceu depois de jun/2026 com um fio roxo.
 */
export function ProjectsSection() {
	const h = useProjectHoles();

	return (
		<section
			id="projetos"
			aria-labelledby="projetos-t"
			style={{ position: "relative" }}
		>
			<ProjectsHeader />
			<AzzasProject h={h} />
			<div className="capq">
				<ChapterHeader />
				<QuazzProject h={h} />
				<SerenaProject h={h} />
				<ClientesProject h={h} />
			</div>
		</section>
	);
}
