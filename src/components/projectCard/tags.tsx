import type React from "react";

interface TagsProps extends React.ComponentProps<"span"> {
  colored:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "magenta"
    | "pink"
    | "white"
    | "black";
  text: string;
}

export function Tags({ colored, text, ...props }: TagsProps) {
  const colorClasses = {
    red: "bg-red-500/10 border-red-500/20 text-red-300",
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    green: "bg-green-500/10 border-green-500/20 text-green-300",
    yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
    magenta: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-300",
    pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
    white: "bg-white/10 border-white/20 text-white",
    black: "bg-black/10 border-black/20 text-gray-300",
  };

  return (
    <span
      className={`px-4 py-1.5 rounded-2xl border text-sm ${colorClasses[colored]}`}
      {...props}
    >
      {text}
    </span>
  );
}
