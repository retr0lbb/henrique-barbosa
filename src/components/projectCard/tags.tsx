import type React from "react";

const colorClasses = {
  red: "bg-red-500/10 border-red-500/20 text-red-300",
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
  green: "bg-green-500/10 border-green-500/20 text-green-300",
  yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
  magenta: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-300",
  pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
  white: "bg-white/10 border-white/20 text-white",
  black: "bg-black/10 border-black/20 text-gray-300",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-200",
  lime: "bg-lime-500/10 border-lime-500/20 text-lime-300",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-300",
  gray: "bg-zinc-500/10 border-zinc-200/10 text-zinc-200",
} as const;

export type TagColor = keyof typeof colorClasses;

interface TagsProps extends React.ComponentProps<"span"> {
  colored: TagColor;
  text: string;
}

export function Tags({ colored, text, ...props }: TagsProps) {
  return (
    <span
      className={`px-3 py-1 md:px-4 md:py-1.5 rounded-2xl border text-xs md:text-sm ${colorClasses[colored]}`}
      {...props}
    >
      {text}
    </span>
  );
}
