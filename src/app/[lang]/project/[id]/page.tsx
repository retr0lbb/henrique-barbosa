"use client";

import { useParams } from "next/navigation";
import { ProjectComponent } from "@/components/project-page-component";
import { Button } from "@/components/button";
import { TechBadge } from "@/components/project-page-component/shared/technologies-badge";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { useDictionary } from "@/hooks/use-dictionary-context";
import { projectsConfig } from "@/config/projects-config";
import type { Locale } from "../../i18n-config";

export default function ProjectPage() {
  const { id, lang } = useParams<{ id: string; lang: Locale }>();
  const dict = useDictionary();

  const projectMetadata = projectsConfig.find((p) => p.id === id);
  const projectDict = dict.projectsSection.projects[id];

  if (!projectMetadata || !projectDict) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="w-full min-h-dvh flex flex-col gap-10">
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title={projectMetadata.title}
          subtitle={projectDict.subtitle}
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={projectMetadata.images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area
              title={projectDict.projectDevelopment.title}
            >
              <p className="text-zinc-400 text-justify max-w-4xl text-sm md:text-lg lg:text-xl md:text-left">
                {projectDict.projectDevelopment.text}
              </p>
            </ProjectComponent.Description.Area>

            {projectDict.whatIs && (
              <ProjectComponent.Description.Area
                title={projectDict.whatIs.title}
              >
                <p className="text-zinc-400 text-justify max-w-4xl text-sm md:text-lg lg:text-xl md:text-left">
                  {projectDict.whatIs.text}
                </p>
              </ProjectComponent.Description.Area>
            )}

            <ProjectComponent.Description.Area
              className="space-y-4"
              title={projectDict.usedTech}
            >
              <div className="flex flex-wrap items-center justify-center max-w-4xl md:justify-start gap-3">
                {projectMetadata.technologies.map((tech) => (
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
              {projectMetadata.githubLink && (
                <Link target="_blank" href={projectMetadata.githubLink}>
                  <Button>
                    <div className="flex items-center justify-center gap-2 text-zinc-300 text-xl font-semibold">
                      <FaGithub />
                      {projectDict.repository}
                    </div>
                  </Button>
                </Link>
              )}

              {projectMetadata.deploymentLink && (
                <Link target="_blank" href={projectMetadata.deploymentLink}>
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
