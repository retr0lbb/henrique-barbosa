import { Body } from "./body";
import { Header } from "./header";
import { Carousel } from "./carousel";
import { Description, DescriptionArea } from "./description";

interface RootProps {
  children: React.ReactNode;
}
function Root(props: RootProps) {
  return (
    <div className="min-h-dvh bg-zinc-950 flex flex-col gap-2 p-2 py-10">
      {props.children}
    </div>
  );
}

export const ProjectComponent = {
  Root,
  Body,
  Header,
  Carousel,
  Description: {
    Root: Description,
    Area: DescriptionArea,
  },
};
