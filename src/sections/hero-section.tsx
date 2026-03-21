"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import type { Dicitionary } from "@/app/[lang]/dictionaries";
import { ASCIIAnimation } from "@/components/asciiAnimation";
import type { ColorOfDivision } from "@/components/divider";
import { useGSAP } from "@/hooks/use-gsap";

interface HeroSectionProps {
  dict: Dicitionary;
  color: ColorOfDivision;
}

export function HeroSection({ dict, color }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP({ scope: containerRef });

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.set([titleRef.current, dividerRef.current, subtitleRef.current], {
        opacity: 0,
        y: 30,
      });

      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6 })
        .to(dividerRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-zinc-950 w-full min-h-dvh flex items-center justify-center relative">
      <div
        ref={containerRef}
        className="flex items-center justify-center flex-col gap-3 z-10"
      >
        <h1
          ref={titleRef}
          className="text-2xl md:text-4xl lg:text-5xl text-zinc-200 font-bold text-center"
        >
          HENRIQUE BARBOSA SAMPAIO
        </h1>
        <div
          ref={dividerRef}
          className="w-full h-px md:h-0.5 bg-zinc-400 drop-shadow-sm drop-shadow-zinc-50"
        />
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-400 rounded-lg"
        >
          {dict.heroSection.subText}
        </p>
      </div>

      <ASCIIAnimation
        fps={24}
        frameFolder="fire_file"
        frameCount={143}
        colorOverlay
        colorsOfColorOverlay={color}
      />
    </main>
  );
}
