interface DescriptionProps {
  children: React.ReactNode;
}

export function Description(props: DescriptionProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 px-2 md:px-6 lg:px-20">
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
      <h1 className="text-zinc-200 text-2xl md:text-2xl font-semibold text-center">
        {props.title}
      </h1>
      <div className="flex items-center justify-center">{props.children}</div>
    </div>
  );
}
