import { projectsConfig, type ProjectId } from "@/config/projects-config";
import type { ProjectMetadata, ProjectTranslation } from "@/types/project";

export interface FullProject {
  metadata: ProjectMetadata;
  translation: ProjectTranslation;
}

export function getProject(
  id: ProjectId,
  translations: Record<ProjectId, ProjectTranslation>,
): FullProject {
  const metadata = projectsConfig.find((p) => p.id === id);

  if (!metadata) {
    throw new Error(
      `[getProject] Project "${id}" not found in projectsConfig. ` +
        "This should never happen if ProjectId is correctly derived.",
    );
  }

  return {
    metadata,
    translation: translations[id],
  };
}

export function getAllProjects(
  translations: Record<ProjectId, ProjectTranslation>,
): FullProject[] {
  return projectsConfig.map((p) => getProject(p.id as ProjectId, translations));
}
