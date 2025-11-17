import { Tags } from "./tags";

interface RootProps {
  title: string;
  description: string;
  to?: string;
  children?: React.ReactNode;
}

function root(props: RootProps) {
  return (
    <div className="flex h-full flex-col gap-1 cursor-pointer break-inside-avoid pb-10">
      <div className="bg-gray-600 rounded-2xl aspect-square">Imagem</div>

      <div className="w-full flex items-center justify-start pt-3 px-2">
        <h1 className="text-2xl text-zinc-200 font-medium">{props.title}</h1>
      </div>

      <div className="w-full flex flex-col gap-3">
        <p className="text-zinc-400 px-2">{props.description}</p>

        <div className="flex items-center gap-2 flex-nowrap">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export const ProjectCard = { Root: root, Tag: Tags };
