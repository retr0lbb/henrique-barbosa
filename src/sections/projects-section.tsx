import { ProjectCard } from "@/components/projectCard";

export function ProjectSection() {
  return (
    <section className="bg-zinc-950 w-full min-h-dvh flex items-center justify-center gap-5 flex-col px-10 py-2">
      <div className="p-5">
        <h1 className="text-5xl font-bold text-zinc-200">Major Projects</h1>
      </div>

      <div className="w-full h-full columns-3 gap-8">
        <ProjectCard.Root
          description="A modern Nextjs Portfolio for a very experienced graphics designer"
          title="Rubens Araujo Filho"
          to=""
        >
          <ProjectCard.Tag colored="green" text="DONE" />
        </ProjectCard.Root>

        <ProjectCard.Root
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
          description="A simple portfolio for a writer and spiritual guide, made by me powered by wix"
          title="Jose Luiz Junior"
          to=""
        >
          <ProjectCard.Tag colored="yellow" text="LOW CODE" />
        </ProjectCard.Root>

        <ProjectCard.Root
          description="Why not develop another task manager, well this one has a catch, you can create any number of subtasks in any task, and yet you can visualize this tasks in a tree format."
          title="Hyperbolic Tasks"
          to=""
        ></ProjectCard.Root>
      </div>
    </section>
  );
}
