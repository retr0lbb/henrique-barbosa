"use client";

import { ProjectComponent } from "@/components/project-page-component";

import PLAY from "@/assets/images/play.webp";

import { Button } from "@/components/button";
import { TechBadge } from "@/components/project-page-component/shared/technologies-badge";
import { SiArduino, SiExpress, SiTypescript } from "react-icons/si";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import Link from "next/link";
import { Footer } from "@/components/footer";
import type { requiredProps } from "@/components/project-page-component/carousel";
import { getDictionary } from "../../dictionaries";
import { useDictionary } from "@/hooks/use-dictionary-context";

const images: requiredProps[] = [
  {
    src: "/videos/fatecard_proj.mp4",
    alt: "Video of Fatecard",
    type: "video",
    poster: PLAY,
  },
];

export default function Page() {
  const dict = useDictionary();
  return (
    <>
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title="FATECARD"
          subtitle={dict.projectsSection.projects.fatecard.subtitle}
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area
              title={
                dict.projectsSection.projects.fatecard.projectDevelopment.title
              }
            >
              <p className="text-zinc-400 max-w-2xl text-justify text-sm md:text-lg lg:text-xl md:text-left">
                {dict.projectsSection.projects.fatecard.projectDevelopment.text}
              </p>
            </ProjectComponent.Description.Area>
            <ProjectComponent.Description.Area
              className="space-y-4"
              title={dict.projectsSection.projects.fatecard.usedTech}
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <TechBadge Icon={FaReact} tecName="React" color={"blue"} />
                <TechBadge
                  Icon={SiTypescript}
                  tecName="Typescript"
                  color={"blue"}
                />

                <TechBadge Icon={FaNodeJs} tecName="Nodejs" color={"lime"} />
                <TechBadge Icon={SiExpress} tecName="Express" color="yellow" />
                <TechBadge Icon={SiArduino} tecName="Arduino" color="blue" />
              </div>
            </ProjectComponent.Description.Area>
            <div className="mt-5 w-full flex items-center justify-center md:justify-start flex-col md:flex-row gap-6">
              <Link
                target="_blank"
                href={"https://github.com/retr0lbb/fatecard-front"}
              >
                <Button>
                  <div className="flex items-center justify-center gap-2 text-zinc-300 text-xl font-semibold">
                    <FaGithub />
                    {dict.projectsSection.projects.fatecard.repository}
                  </div>
                </Button>
              </Link>
            </div>
          </ProjectComponent.Description.Root>
        </ProjectComponent.Body>
      </ProjectComponent.Root>
      <Footer />
    </>
  );
}
