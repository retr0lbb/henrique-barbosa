import { ProjectCard } from "@/components/projectCard";
import { FaGithub } from "react-icons/fa6";
import { type ColorOfDivision, Divider } from "@/components/divider";
import { AccordionCollapse } from "@/components/accordion-colapse";
import { Button } from "@/components/button";
import type { StaticImageData } from "next/image";
import type { Dicitionary } from "@/app/[lang]/dictionaries";

import { getAllProjects } from "@/lib/get-project";

interface ProjectSectionProps {
  dict: Dicitionary;
  lang: string;
  color: ColorOfDivision;
}

export function ProjectSection({ dict, lang, color }: ProjectSectionProps) {
  return (
    <section
      className="bg-zinc-950 w-full min-h-[100dvh] flex items-center justify-center gap-5 flex-col px-10 py-2"
      id="projects"
    >
      <Divider color={color} />
      <div className="p-5 pb-10">
        <h1 className="text-4xl md:text-5xl pb-10 md:pb-2 lg:pb-0 md:font-bold text-zinc-200">
          {dict.projectsSection.title}
        </h1>
      </div>
      <AccordionCollapse
        expandText={dict.projectsSection.accordionButton.seeMore}
        retractText={dict.projectsSection.accordionButton.seeLess}
        startColapse={false}
      >
        <div className="w-full h-full columns-1 md:columns-2 lg:columns-3 md:gap-8 gap-2">
          {getAllProjects(dict.projectsSection.projects).map((project) => (
            <ProjectCard.Root
              key={project.metadata.id}
              src={project.metadata.mainImage as StaticImageData}
              srcAlt={project.metadata.mainImageAlt}
              description={project.translation.shortDesc}
              title={project.metadata.title}
              to={`/${lang}/project/${project.metadata.id}`}
            >
              {project.metadata.status && (
                <ProjectCard.Tag
                  colored={project.metadata.statusColor || "white"}
                  text={project.metadata.status}
                />
              )}
            </ProjectCard.Root>
          ))}
        </div>
      </AccordionCollapse>

      <div className="flex flex-col items-center justify-center p-5 gap-8">
        <p className="text-xl md:text-2xl text-justify md:text-center text-zinc-300 max-w-2xl">
          {dict.projectsSection.representativeText}
        </p>

        <Button variant="terminal" type="button">
          <FaGithub size={28} className="text-zinc-200" />
          <p className="text-2xl text-zinc-200 font-medium">GitHub</p>
        </Button>
      </div>
    </section>
  );
}
