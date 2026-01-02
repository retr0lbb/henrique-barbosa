export type ColorOfDivision = "CYAN" | "YELLOW" | "GREEN" | "RED";

const COLOR_OVERLAY_GRADIENTS: Record<ColorOfDivision, string> = {
  CYAN: "via-cyan-500",
  GREEN: "via-emerald-500",
  YELLOW: "via-amber-400",
  RED: "via-rose-600",
};

export function Divider({ color = "CYAN" }: { color?: ColorOfDivision }) {
  return (
    <div
      className={`w-full h-1 bg-linear-to-r from-zinc-950 ${COLOR_OVERLAY_GRADIENTS[color]} to-zinc-950`}
    ></div>
  );
}
