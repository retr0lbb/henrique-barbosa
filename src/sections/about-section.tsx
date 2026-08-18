/** biome-ignore-all lint/suspicious/noArrayIndexKey: <forgetAbout it> */
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Dicitionary } from "@/app/[lang]/dictionaries";
import Me from "@/assets/images/profile.jpeg";
import { BackgroundAnimation } from "@/components/background-animation";
import { Button } from "@/components/button";
import { type ColorOfDivision, Divider } from "@/components/divider";
import { Scroller } from "@/components/scrollingHistory/scroller";
import { ScrollSection } from "@/components/scrollingHistory/scrollSection";
import { WorkExperienceCard } from "@/components/work-experience-card";

gsap.registerPlugin(ScrollTrigger);

interface AboutSectionProps {
  dict: Dicitionary;
  lang: string;
  color: ColorOfDivision;
}

export function AboutSection({ dict, lang, color }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      if (profileRef.current) {
        gsap.from(profileRef.current, {
          scrollTrigger: {
            trigger: profileRef.current,
            start: "top 80%",
          },
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      if (experienceRef.current) {
        const cards =
          experienceRef.current.querySelectorAll("[data-work-card]");
        gsap.from(cards, {
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      if (bioRef.current) {
        const elements = bioRef.current.querySelectorAll("p, button");
        gsap.from(elements, {
          scrollTrigger: {
            trigger: bioRef.current,
            start: "top 80%",
          },
          opacity: 100,
          y: 20,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[100dvh] mt-5 relative"
      id="about"
    >
      <BackgroundAnimation />
      <Divider color={color} />

      <h1
        ref={titleRef}
        className="w-full text-center pb-24 text-zinc-200 text-5xl md:text-6xl font-bold py-4"
      >
        {dict.aboutSection.title}
      </h1>

      <div className="flex flex-1 pb-4 gap-8 md:gap-4 mx-4 md:mx-8 flex-col md:flex-row">
        <div className="flex flex-col  pb-2 md:pb-0 md:pl-4 mt-0 md:mt-16 w-full items-center md:w-86 md:items-start shrink-0">
          <Image
            alt="Men with black curly hair using black shirt posing in a grass like background looking straight at the camera"
            className="object-cover rounded-4xl aspect-square size-86 p-4"
            src={Me}
          />

          <p className="text-zinc-400 text-center text-xl break-words">
            {dict.aboutSection.moreAbout}
          </p>

          <Link
            className="w-full mt-3 flex items-center justify-center"
            href={`/${lang}/#projects`}
          >
            <Button variant="terminal">
              <p className="text-zinc-200 text-xl font-bold">
                {dict.aboutSection.myProjectsButton}
              </p>
            </Button>
          </Link>
        </div>

        <Divider className="md:hidden block" />

        <div className="flex flex-1 items-center flex-col gap-2 shrink-0">
          <h1 className="text-2xl md:text-4xl text-zinc-200 py-4">
            {dict.aboutSection.workExperience.title}
          </h1>

          <div className="w-full pt-4 md:pt-0 px-4 md:px-10 space-y-4 md:space-y-2.5">
            {dict.aboutSection.experience.map((job, index) => {
              return (
                <WorkExperienceCard.Root
                  company_or_person={job.company}
                  duration={job.duration}
                  job_function={job.jobTitle}
                  model_of_contract={job.modelOfContractor}
                  key={index}
                >
                  {job.keyPoints.map((kp, index) => {
                    return (
                      <WorkExperienceCard.KeyPoint key={index}>
                        {kp}
                      </WorkExperienceCard.KeyPoint>
                    );
                  })}
                </WorkExperienceCard.Root>
              );
            })}
          </div>
        </div>
      </div>
      <Scroller>
        <ScrollSection color={color} year={"2015"} isOnStart>
          <div className="w-full h-full flex flex-col items-center justify-center gap-12">
            <h1 className="text-2xl text-center md:text-3xl lg:text-4xl lg:text-left font-bold text-zinc-200">
              {dict.historyTime[2015].title}
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-justify text-zinc-300">
              {dict.historyTime[2015].desc}
            </p>
          </div>
        </ScrollSection>
        <ScrollSection color={color} year={"2024"}>
          <div className="w-full h-full flex flex-col items-center justify-center gap-12">
            <h1 className="text-2xl text-center md:text-3xl lg:text-4xl lg:text-left font-bold text-zinc-200">
              {dict.historyTime[2024].title}
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-justify text-zinc-200">
              {dict.historyTime[2024].desc}
            </p>
          </div>
        </ScrollSection>

        <ScrollSection color={color} year={"2050"} isOnEnd>
          <div className="w-full h-full flex flex-col items-center justify-center gap-12">
            <h1 className="text-2xl text-center md:text-3xl lg:text-4xl lg:text-left font-bold text-zinc-200">
              {dict.historyTime[2050].title}
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-justify text-zinc-200">
              {dict.historyTime[2050].desc}
            </p>
          </div>
        </ScrollSection>
      </Scroller>
    </section>
  );
}
