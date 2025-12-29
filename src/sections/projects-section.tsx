import { ProjectCard } from "@/components/projectCard";
import { FaGithub } from "react-icons/fa6";
import RBMAIN from "@/assets/images/projeto_rubens/rb_main.png";
import NERD from "@/assets/images/projeto_nerd/NERD_main.png";
import HYPER from "@/assets/images/projeto_hyperbolic/HT_main.png";
import TJ from "@/assets/images/projeto_junior/TJ_main.png";
import { Divider } from "@/components/divider";
import { AccordionCollapse } from "@/components/accordion-colapse";
import { Button } from "@/components/button";
import type { Dicitionary } from "@/app/[lang]/dictionaries";

interface ProjectSectionProps {
  dict: Dicitionary;
  lang: string;
}

export function ProjectSection({ dict, lang }: ProjectSectionProps) {
  return (
    <section
      className="bg-zinc-950 w-full min-h-svh flex items-center justify-center gap-5 flex-col px-10 py-2"
      id="projects"
    >
      <Divider />
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
          <ProjectCard.Root
            src={RBMAIN}
            srcAlt="Portfolio of Rubens"
            description={dict.projectsSection.projects.rubens.shortDesc}
            title="Rubens Araujo Filho"
            to={`/${lang}/project/ruben`}
          >
            <ProjectCard.Tag colored="green" text="DONE" />
          </ProjectCard.Root>

          <ProjectCard.Root
            src={NERD}
            srcAlt="Image of an nerd emoji with glasses"
            description={dict.projectsSection.projects.nerd.shortDesc}
            title="N.E.R.D"
            to="/project/nerd"
          ></ProjectCard.Root>

          <ProjectCard.Root
            description={dict.projectsSection.projects.fatecard.shortDesc}
            title="Fatecard"
            to="/project/fatecard"
          >
            <ProjectCard.Tag colored="red" text="JUST PITCH IDEA" />
          </ProjectCard.Root>

          <ProjectCard.Root
            src={TJ}
            srcAlt="Homen com turbante vermelho"
            description={dict.projectsSection.projects.jlj.shortDesc}
            title="Jose Luiz Junior"
            to="/project/junior"
          >
            <ProjectCard.Tag colored="yellow" text="LOW CODE" />
          </ProjectCard.Root>

          <ProjectCard.Root
            src={HYPER}
            srcAlt="Image of an text showing the text Hyperbolic Tasks in white"
            description={dict.projectsSection.projects.ht.shortDesc}
            title="Hyperbolic Tasks"
            to="/project/hyperbolic"
          ></ProjectCard.Root>
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
