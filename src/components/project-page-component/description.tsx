interface DescriptionProps {
  children: React.ReactNode;
}

export function Description(props: DescriptionProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 px-20">
      {props.children}
    </div>
  );
}

interface DescriptionAreaProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}
export function DescriptionArea(props: DescriptionAreaProps) {
  return (
    <div className={`space-y-1 w-full ${props.className}`}>
      <h1 className="text-zinc-200 text-4xl font-semibold">{props.title}</h1>
      {props.children}
    </div>
  );
}
