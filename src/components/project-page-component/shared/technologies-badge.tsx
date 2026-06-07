import type { TagColor } from "@/components/projectCard/tags";

interface TechBadgeProps {
  tecName: string;
  color: TagColor;
  textColor?: TagColor;
  Icon: React.ElementType;
}

export function TechBadge({ tecName, color, Icon, textColor }: TechBadgeProps) {
  const colorClasses: Record<TagColor, string> = {
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    red: "text-red-500 bg-red-500/10 border-red-500/20",
    yellow: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    lime: "text-lime-500 bg-lime-500/10 border-lime-500/20",
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    green: "text-green-500 bg-green-500/10 border-green-500/20",
    gray: "text-zinc-200 bg-zinc-500/10 border border-zinc-200/10",
    magenta: "text-fuchsia-500 bg-fuchsia-500/10 border-fuchsia-500/20",
    pink: "text-pink-500 bg-pink-500/10 border-pink-500/20",
    white: "text-white bg-white/10 border-white/20",
    black: "text-gray-300 bg-black/10 border-black/20",
    orange: "text-orange-500 bg-orange-500/10 border-orange-500/20",
  };

  const textColorClasses: Record<TagColor, string> = {
    blue: "text-blue-500",
    red: "text-red-500",
    yellow: "text-yellow-500",
    lime: "text-lime-500",
    emerald: "text-emerald-500",
    purple: "text-purple-500",
    green: "text-green-500",
    gray: "text-zinc-200",
    magenta: "text-fuchsia-500",
    pink: "text-pink-500",
    white: "text-white",
    black: "text-gray-300",
    orange: "text-orange-500",
  };

  const baseClasses = colorClasses[color];
  const finalClasses = textColor
    ? baseClasses.replace(/text-\w+(?:-\d+)?/, textColorClasses[textColor])
    : baseClasses;

  return (
    <div
      className={`flex items-center justify-center gap-2 px-3 py-1.5 text-sm md:text-xl rounded-full border ${finalClasses}`}
    >
      <Icon />
      <span>{tecName}</span>
    </div>
  );
}
