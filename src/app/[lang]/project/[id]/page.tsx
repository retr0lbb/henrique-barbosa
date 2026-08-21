"use client";

import { useParams } from "next/navigation";
import { ProjectComponent } from "@/components/project-page-component";
import { Button } from "@/components/button";
import { TechBadge } from "@/components/project-page-component/shared/technologies-badge";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { useDictionary } from "@/hooks/use-dictionary-context";
import { projectsConfig, type ProjectId } from "@/config/projects-config";
import { getProject } from "@/lib/get-project";
import type { Locale } from "../../i18n-config";
import { useEffect } from "react";
import { trackGoogleAdsConversion } from "@/lib/google-ads";
import { GoogleAdsConversion } from "@/components/conversion";

export default function ProjectPage() {
  const { id, lang } = useParams<{ id: string; lang: Locale }>();
  const dict = useDictionary();

  const projectMeta = projectsConfig.find((p) => p.id === id);
  if (!projectMeta) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  const project = getProject(projectMeta.id, dict.projectsSection.projects);

  return (
    <div className="w-full min-h-dvh flex flex-col gap-10">
      <GoogleAdsConversion />
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title={project.metadata.title}
          subtitle={project.translation.subtitle}
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={project.metadata.images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area
              title={project.translation.projectDevelopment.title}
            >
              <p className="text-zinc-400 text-justify max-w-4xl text-sm md:text-lg lg:text-xl md:text-left">
                {project.translation.projectDevelopment.text}
              </p>
            </ProjectComponent.Description.Area>

            {project.translation.whatIs && (
              <ProjectComponent.Description.Area
                title={project.translation.whatIs.title}
              >
                <p className="text-zinc-400 text-justify max-w-4xl text-sm md:text-lg lg:text-xl md:text-left">
                  {project.translation.whatIs.text}
                </p>
              </ProjectComponent.Description.Area>
            )}

            <ProjectComponent.Description.Area
              className="space-y-4"
              title={project.translation.usedTech}
            >
              <div className="flex flex-wrap items-center justify-center max-w-4xl md:justify-start gap-3">
                {project.metadata.technologies.map((tech) => (
                  <TechBadge
                    key={tech.name}
                    Icon={tech.icon}
                    tecName={tech.name}
                    color={tech.color}
                  />
                ))}
              </div>
            </ProjectComponent.Description.Area>

            <div className="mt-8 w-full flex items-center justify-center md:justify-start flex-col md:flex-row gap-6">
              {project.metadata.githubLink && (
                <Link target="_blank" href={project.metadata.githubLink}>
                  <Button>
                    <div className="flex items-center justify-center gap-2 text-zinc-300 text-xl font-semibold">
                      <FaGithub />
                      {project.translation.repository}
                    </div>
                  </Button>
                </Link>
              )}

              {project.metadata.deploymentLink && (
                <Link target="_blank" href={project.metadata.deploymentLink}>
                  <Button>
                    <div className="flex items-center justify-center gap-2 text-zinc-300 text-xl font-semibold">
                      <FaGlobe />
                      Website
                    </div>
                  </Button>
                </Link>
              )}
            </div>
          </ProjectComponent.Description.Root>
        </ProjectComponent.Body>
      </ProjectComponent.Root>
      <Footer />
    </div>
  );
}
