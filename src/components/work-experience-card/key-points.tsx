interface KeyPointsProps {
  children: React.ReactNode;
}

export function KeyPoint(props: KeyPointsProps) {
  return (
    <div className="flex gap-2 items-baseline">
      <div className="size-2 md:size-3 shrink-0 bg-zinc-400 rounded-full" />
      <p className="text-zinc-400 text-sm md:text-md">{props.children}</p>
    </div>
  );
}
