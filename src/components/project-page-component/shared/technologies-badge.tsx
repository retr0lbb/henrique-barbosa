type TailwindColor =
  | "blue"
  | "red"
  | "yellow"
  | "lime"
  | "emerald"
  | "purple"
  | "green";

interface TechStackProps {
  tecName: string;
  color: TailwindColor;
  textColor?: TailwindColor;
  Icon: React.ElementType;
}

export function TechBadge({ tecName, color, Icon, textColor }: TechStackProps) {
  return (
    <div
      className={`
        flex items-center justify-center gap-2
        px-3 py-1.5 text-xl rounded-full
        ${textColor ? `text-${textColor}-500` : `text-${color}-500`}
        bg-${color}-500/10
        border border-${color}-500/20
      `}
    >
      <Icon />
      <span>{tecName}</span>
    </div>
  );
}
