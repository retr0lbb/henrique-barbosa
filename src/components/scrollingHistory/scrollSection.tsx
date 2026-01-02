"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ColorOfDivision } from "../divider";

interface ColorProps {
  from: string;
  via: string;
  to: string;
  bg: string;
}

const COLOR_OVERLAY_GRADIENTS: Record<ColorOfDivision, ColorProps> = {
  CYAN: {
    from: "from-blue-500",
    via: "via-cyan-400",
    to: "to-blue-500",
    bg: "bg-blue-500",
  },
  GREEN: {
    from: "from-emerald-500",
    via: "via-lime-400",
    to: "to-emerald-500",
    bg: "bg-emerald-500",
  },
  YELLOW: {
    from: "from-amber-500",
    via: "via-yellow-400",
    to: "to-amber-500",
    bg: "bg-amber-500",
  },
  RED: {
    from: "from-rose-600",
    via: "via-red-500",
    to: "to-rose-600",
    bg: "bg-rose-600",
  },
};

interface ScrollSectionProps {
  year?: string;
  children: React.ReactNode;
  isOnStart?: boolean;
  isOnEnd?: boolean;
  color?: ColorOfDivision;
}

export function ScrollSection(props: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const correctColor = props.color ?? "CYAN";

  const isInView = useInView(ref, { once: false, margin: "-400px" });

  return (
    <div ref={ref} className="w-full min-h-dvh flex px-4 gap-10">
      <div className="min-h-full min-w-60 hidden lg:flex flex-col relative items-center justify-center">
        <div
          className={`min-h-full max-w-1 bg-linear-to-b absolute hidden lg:block inset-0 left-6 
                    ${props.isOnStart ? "from-zinc-950" : COLOR_OVERLAY_GRADIENTS[correctColor].from} 
                    ${COLOR_OVERLAY_GRADIENTS[correctColor].via}
                    ${props.isOnEnd ? "to-zinc-950" : COLOR_OVERLAY_GRADIENTS[correctColor].to}
                    ${props.isOnStart && "rounded-t-full"} 
                    ${props.isOnEnd && "rounded-b-full"}`}
        />

        {/* ANIMAÇÃO DO ANO */}
        {props.year && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center gap-5"
          >
            <div
              className={`h-2 max-w-10 min-w-10 ${COLOR_OVERLAY_GRADIENTS[correctColor].bg}`}
            />
            <h1 className="text-7xl font-bold text-zinc-200">{props.year}</h1>
          </motion.div>
        )}
      </div>

      <div className="flex flex-1 items-center justify-center">
        {props.children}
      </div>
    </div>
  );
}
