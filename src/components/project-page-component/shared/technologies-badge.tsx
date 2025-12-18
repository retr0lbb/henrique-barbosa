type TailwindColor =
  | "blue"
  | "red"
  | "yellow"
  | "lime"
  | "emerald"
  | "purple"
  | "green"
  | "gray";

interface TechBadgeProps {
  tecName: string;
  color: TailwindColor;
  textColor?: TailwindColor;
  Icon: React.ElementType;
}

export function TechBadge({ tecName, color, Icon, textColor }: TechBadgeProps) {
  const colorClasses: Record<TailwindColor, string> = {
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    red: "text-red-500 bg-red-500/10 border-red-500/20",
    yellow: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    lime: "text-lime-500 bg-lime-500/10 border-lime-500/20",
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    green: "text-green-500 bg-green-500/10 border-green-500/20",
    gray: "text-zinc-200 bg-zinc-500/10 border border-zinc-200/10",
  };

  const textColorClasses: Record<TailwindColor, string> = {
    blue: "text-blue-500",
    red: "text-red-500",
    yellow: "text-yellow-500",
    lime: "text-lime-500",
    emerald: "text-emerald-500",
    purple: "text-purple-500",
    green: "text-green-500",
    gray: "text-zinc-200",
  };

  const baseClasses = colorClasses[color];
  const finalClasses = textColor
    ? baseClasses.replace(/text-\w+-500/, textColorClasses[textColor])
    : baseClasses;

  return (
    <div
      className={`flex items-center justify-center gap-2 px-3 py-1.5 text-xl rounded-full border ${finalClasses}`}
    >
      <Icon />
      <span>{tecName}</span>
    </div>
  );
}
