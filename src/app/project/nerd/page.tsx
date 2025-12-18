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

const images = [
  { src: NERD_MAIN, alt: "game page" },
  { src: NERD_GAME, alt: "library page" },
  { src: NERD_LIB, alt: "game page 2" },
  { src: NERD_PROFILE, alt: "library page 2" },
  { src: NERD_CAPTURE, alt: "game page 3" },
];

export default function Page() {
  return (
    <ProjectComponent.Root>
      <ProjectComponent.Header
        title="N.E.R.D"
        subtitle="A games platform made by Brazilians for Brazilians."
      />
      <ProjectComponent.Body>
        <ProjectComponent.Carousel imgs={images} />
        <ProjectComponent.Description.Root>
          <ProjectComponent.Description.Area title="Project Development">
            <p className="text-zinc-400 max-w-2xl text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, at
              laudantium? Beatae vitae molestiae eligendi quidem qui unde odit
              expedita aspernatur tenetur voluptatum ea officiis earum
              voluptatem, quisquam, harum nostrum?
            </p>
          </ProjectComponent.Description.Area>
          <ProjectComponent.Description.Area
            className="space-y-4"
            title="Used Technologies"
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
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
          <div className="mt-5 w-full flex items-center justify-start gap-10">
            <Link target="_blank" href={"https://github.com/retr0lbb/N.E.R.D"}>
              <Button variant="terminal">
                <FaGithub />
                Repository
              </Button>
            </Link>
          </div>
        </ProjectComponent.Description.Root>
      </ProjectComponent.Body>
    </ProjectComponent.Root>
  );
}
