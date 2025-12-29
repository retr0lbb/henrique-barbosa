"use client";
import { ProjectComponent } from "@/components/project-page-component";

import NERD_GAME from "@/assets/images/projeto_nerd/NERD_game.png";
import NERD_LIB from "@/assets/images/projeto_nerd/NERD_games.png";
import NERD_MAIN from "@/assets/images/projeto_nerd/NERD_main.png";
import NERD_PROFILE from "@/assets/images/projeto_nerd/NERD_profile.png";
import NERD_CAPTURE from "@/assets/images/projeto_nerd/Nerd_capture.png";

import { Button } from "@/components/button";
import { TechBadge } from "@/components/project-page-component/shared/technologies-badge";
import { SiExpress, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import Link from "next/link";
import { Footer } from "@/components/footer";
import type { requiredProps } from "@/components/project-page-component/carousel";
import { useDictionary } from "@/hooks/use-dictionary-context";

const images: requiredProps[] = [
  { src: NERD_MAIN, type: "image", alt: "game page" },
  { src: NERD_GAME, type: "image", alt: "library page" },
  { src: NERD_LIB, type: "image", alt: "game page 2" },
  { src: NERD_PROFILE, type: "image", alt: "library page 2" },
  { src: NERD_CAPTURE, type: "image", alt: "game page 3" },
];

export default function Page() {
  const dict = useDictionary();
  return (
    <>
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title="N.E.R.D"
          subtitle={dict.projectsSection.projects.nerd.subtitle}
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area
              title={
                dict.projectsSection.projects.nerd.projectDevelopment.title
              }
            >
              <p className="text-zinc-400 max-w-2xl text-justify text-sm md:text-lg lg:text-xl md:text-left">
                {dict.projectsSection.projects.nerd.projectDevelopment.text}
              </p>
            </ProjectComponent.Description.Area>
            <ProjectComponent.Description.Area
              className="space-y-4"
              title={dict.projectsSection.projects.nerd.usedTech}
            >
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <TechBadge Icon={FaReact} tecName="React" color={"blue"} />
                <TechBadge
                  Icon={SiTypescript}
                  tecName="Typescript"
                  color={"blue"}
                />

                <TechBadge Icon={FaNodeJs} tecName="Nodejs" color={"lime"} />
                <TechBadge
                  Icon={DiMongodb}
                  tecName="MongoDb"
                  textColor="lime"
                  color={"green"}
                />
                <TechBadge Icon={SiExpress} tecName="Express" color="yellow" />
              </div>
            </ProjectComponent.Description.Area>
            <div className="mt-5 w-full flex items-center justify-center md:justify-start flex-col md:flex-row gap-6">
              <Link
                target="_blank"
                href={"https://github.com/retr0lbb/N.E.R.D"}
              >
                <Button>
                  <div className="flex items-center justify-center gap-2 text-zinc-300 text-xl font-semibold">
                    <FaGithub />
                    {dict.projectsSection.projects.nerd.repository}
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
