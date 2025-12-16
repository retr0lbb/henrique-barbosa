import { ProjectCard } from "@/components/projectCard";
import { FaGithub } from "react-icons/fa6";
import RBMAIN from "@/assets/images/projeto_rubens/rb_main.png";
import NERD from "@/assets/images/projeto_nerd/NERD_main.png";
import HYPER from "@/assets/images/projeto_hyperbolic/HT_main.png";
import TJ from "@/assets/images/projeto_junior/TJ_main.png";
import { Divider } from "@/components/divider";
import { AccordionCollapse } from "@/components/accordion-colapse";

export function ProjectSection() {
  return (
    <section
      className="bg-zinc-950 w-full min-h-dvh flex items-center justify-center gap-5 flex-col px-10 py-2"
      id="projects"
    >
      <Divider />
      <div className="p-5 pb-10">
        <h1 className="text-4xl md:text-5xl pb-10 md:pb-2 lg:pb-0 md:font-bold text-zinc-200">
          Major Projects
        </h1>
      </div>
      <AccordionCollapse startColapse={false}>
        <div className="w-full h-full columns-1 md:columns-2 lg:columns-3 md:gap-8 gap-2">
          <ProjectCard.Root
            src={RBMAIN}
            srcAlt="Portfolio of Rubens"
            description="A modern Nextjs Portfolio for a very experienced graphics designer"
            title="Rubens Araujo Filho"
            to=""
          >
            <ProjectCard.Tag colored="green" text="DONE" />
          </ProjectCard.Root>

          <ProjectCard.Root
            src={NERD}
            srcAlt="Image of an nerd emoji with glasses"
            description="The game platform made by Brazilians to Brazilians, in future, Ai tools would be implemented in order to make easier to develop games and build a stronger market."
            title="N.E.R.D"
            to=""
          ></ProjectCard.Root>

          <ProjectCard.Root
            description="Why not implement security features and as a bonus, automate boring tasks"
            title="Fatecard"
            to=""
          >
            <ProjectCard.Tag colored="red" text="JUST PITCH IDEA" />
          </ProjectCard.Root>

          <ProjectCard.Root
            src={TJ}
            srcAlt="Homen com turbante vermelho"
            description="A simple portfolio for a writer and spiritual guide, made by me powered by wix"
            title="Jose Luiz Junior"
            to=""
          >
            <ProjectCard.Tag colored="yellow" text="LOW CODE" />
          </ProjectCard.Root>

          <ProjectCard.Root
            src={HYPER}
            srcAlt="Image of an text showing the text Hyperbolic Tasks in white"
            description="Why not develop another task manager, well this one has a catch, you can create any number of subtasks in any task, and yet you can visualize this tasks in a tree format."
            title="Hyperbolic Tasks"
            to=""
          ></ProjectCard.Root>
        </div>
      </AccordionCollapse>

      <div className="flex flex-col items-center justify-center p-5 gap-8">
        <p className="text-2xl text-zinc-300 max-w-2xl">
          These are some of my best projects, but they don't represent the
          entirety of my work. For a complete overview, please visit my GitHub.
        </p>

        <button
          className="flex items-center cursor-pointer justify-center gap-5 bg-zinc-200/10 px-6 py-2.5 border border-zinc-200/15 rounded-lg shadow-xl shadow-zinc-500/5"
          type="button"
        >
          <FaGithub size={28} className="text-zinc-200" />
          <p className="text-2xl text-zinc-200 font-medium">GitHub</p>
        </button>
      </div>
    </section>
  );
}
