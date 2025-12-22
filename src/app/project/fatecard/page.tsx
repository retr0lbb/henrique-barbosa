import { ProjectComponent } from "@/components/project-page-component";

import PLAY from "@/assets/images/play.webp";

import { Button } from "@/components/button";
import { TechBadge } from "@/components/project-page-component/shared/technologies-badge";
import { SiArduino, SiExpress, SiTypescript } from "react-icons/si";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import Link from "next/link";
import { Footer } from "@/components/footer";
import type { requiredProps } from "@/components/project-page-component/carousel";

const images: requiredProps[] = [
  {
    src: "/videos/fatecard_proj.mp4",
    alt: "Video of Fatecard",
    type: "video",
    poster: PLAY,
  },
];

export default function Page() {
  return (
    <div className="w-full min-h-dvh flex flex-col gap-10">
      <ProjectComponent.Root>
        <ProjectComponent.Header
          title="FATECARD"
          subtitle="Smart security system for universities."
        />
        <ProjectComponent.Body>
          <ProjectComponent.Carousel imgs={images} />
          <ProjectComponent.Description.Root>
            <ProjectComponent.Description.Area title="Project Development">
              <p className="text-zinc-400 max-w-2xl text-justify text-sm md:text-lg lg:text-xl md:text-left">
                This is a project that i developed during a Hackathon from my
                university. The ideia is that every student will receive a RFID
                card that works both for identification and as a tool to mark
                presence, mark attendance on talks and events and it could be a
                way to use this data for predict when a student will dropout or
                where would be the best place to put a new water filter based on
                where the students most passes. The possibilities are infinity.
              </p>
            </ProjectComponent.Description.Area>
            <ProjectComponent.Description.Area
              className="space-y-4"
              title="Used Technologies"
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
                    Repository
                  </div>
                </Button>
              </Link>
            </div>
          </ProjectComponent.Description.Root>
        </ProjectComponent.Body>
      </ProjectComponent.Root>
      <Footer />
    </div>
  );
}
