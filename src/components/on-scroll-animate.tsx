"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function OnScrollAnimateGrid() {
  const containerRef = useRef(null);

  const years = [2020, 2021, 2022, 2023, 2024];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(years.length - 1) * 100],
  );

  return (
    <section
      className="relative"
      style={{ height: `${years.length * 100}dvh` }}
      ref={containerRef}
    >
      <div className="sticky top-0 h-dvh overflow-hidden">
        <motion.div
          style={{ x: useTransform(x, (value) => `${value}dvw`) }}
          className="flex h-full"
        >
          <BasicGrid year={2024} />
        </motion.div>
      </div>
    </section>
  );
}

export function BasicGrid(props: { year: number }) {
  return (
    <div className="flex shrink-0 w-dvw h-dvh items-center justify-center px-8 relative bg-zinc-950">
      <div className="top-7 absolute flex w-full h-full flex-col">
        <h1 className="text-8xl px-10 text-zinc-200 pb-4">{props.year}</h1>
        <div className="w-full h-0.5 bg-blue-700"></div>
      </div>

      <div>
        <p className="text-zinc-200">
          Neste ano, eu precisei transar forcadamente
        </p>
      </div>
    </div>
  );
}
