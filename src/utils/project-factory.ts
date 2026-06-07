/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
import type {
  ProjectMedia,
  ProjectMetadata,
  ProjectTechnology,
} from "@/types/project";

type ProjectCore = Pick<
  ProjectMetadata,
  "id" | "title" | "mainImage" | "mainImageAlt"
> &
  Partial<
    Pick<
      ProjectMetadata,
      "status" | "statusColor" | "githubLink" | "deploymentLink"
    >
  >;

interface ProjectBuilder extends ProjectMetadata {
  withTech(...tech: ProjectTechnology[]): this;
  withImages(images: ProjectMedia[]): this;
  withLinks(links: { github?: string; deploy?: string }): this;
}

export function defineProject(
  id: string,
  core: Omit<ProjectCore, "id">,
): ProjectBuilder {
  const state: ProjectMetadata = {
    id,
    technologies: [] as ProjectTechnology[],
    images: [] as ProjectMedia[],
    ...core,
  };

  const builder: ProjectBuilder = {
    get id() {
      return state.id;
    },
    get title() {
      return state.title;
    },
    get mainImage() {
      return state.mainImage;
    },
    get mainImageAlt() {
      return state.mainImageAlt;
    },
    get status() {
      return state.status;
    },
    get statusColor() {
      return state.statusColor;
    },
    get githubLink() {
      return state.githubLink;
    },
    get deploymentLink() {
      return state.deploymentLink;
    },
    get technologies() {
      return state.technologies;
    },
    get images() {
      return state.images;
    },

    withTech(...tech) {
      state.technologies = tech;
      return this;
    },

    withImages(images: ProjectMedia[]) {
      state.images = images;
      return this;
    },

    withLinks({ github, deploy }) {
      if (github) state.githubLink = github;
      if (deploy) state.deploymentLink = deploy;
      return this;
    },
  };

  return builder;
}
