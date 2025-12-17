import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "terminal" | "primary" | "secondary";
  terminalColor?: "white" | "cyan" | "green";
}

const variantObj = {
  primary:
    "bg-zinc-200/10 px-6 py-2.5 border border-zinc-200/15 rounded-lg shadow-xl shadow-zinc-500/5",
  terminal: "",
  secondary: "",
};

export function Button({
  variant = "primary",
  terminalColor = "white",
  children,
  ...rest
}: ButtonProps) {
  const terminalColors = {
    white: {
      default: "text-zinc-200",
      selected: "text-white bg-white/20",
      hover: "hover:text-white hover:bg-white/15",
    },
    cyan: {
      default: "text-cyan-400",
      selected: "text-cyan-300 bg-cyan-400/30",
      hover: "hover:text-cyan-300 hover:bg-cyan-400/25",
    },
    green: {
      default: "text-green-400",
      selected: "text-green-300 bg-green-400/30",
      hover: "hover:text-green-300 hover:bg-green-400/25",
    },
  };

  const colorScheme = terminalColors[terminalColor];

  if (variant === "terminal") {
    return (
      <button
        className={`flex items-center cursor-pointer justify-center gap-2 px-4 py-2 font-code text-4xl transition-all duration-150 rounded 
          ${colorScheme.default} ${colorScheme.hover}`}
        type="button"
        {...rest}
      >
        <span>[</span>
        <span className="text-3xl flex gap-4">{children}</span>
        <span>]</span>
      </button>
    );
  }

  return (
    <button
      className={`flex items-center cursor-pointer justify-center gap-5 px-2 py-1.5 ${variantObj[variant]}`}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
