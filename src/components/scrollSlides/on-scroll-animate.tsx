/** biome-ignore-all lint/correctness/useHookAtTopLevel: Needless */
"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Slide } from "./Slide";

export function OnScrollAnimateGrid() {
  const containerRef = useRef(null);
  const years = [2020, 2021, 2022, 2023, 2024, 2025];

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
          {years.map((year, index) => (
            <Slide
              key={year}
              year={year}
              index={index}
              totalSlides={years.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
