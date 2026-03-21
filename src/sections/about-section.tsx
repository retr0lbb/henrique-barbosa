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
          opacity: 0,
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
      <Scroller>
        <ScrollSection color={color} isOnStart year={dict.aboutSection.sideBar}>
          <div className="w-full h-full grid grid-cols-2 grid-rows-[auto_auto_auto_auto] md:grid-cols-5 md:grid-rows-3 gap-4 p-4 md:p-10">
            <div
              ref={profileRef}
              className="col-span-2 md:row-span-2 w-full h-full rounded-lg flex items-center justify-center"
            >
              <div className="aspect-square w-full h-auto">
                <Image
                  alt="Image of ryan gosling"
                  className="w-full h-full object-cover rounded-full p-4"
                  src={Me}
                />
              </div>
            </div>

            <div
              ref={experienceRef}
              className="col-span-2 md:col-span-3 md:row-span-3 flex items-center justify-center gap-8 flex-col h-full md:px-5 py-4"
            >
              <h1 className="text-2xl md:text-4xl text-zinc-200">
                {dict.aboutSection.workExperience.title}
              </h1>
              <div className="flex flex-1 items-center gap-4 flex-col md:px-6">
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

            <div
              ref={bioRef}
              className="col-span-2 flex flex-col items-center justify-center gap-6 w-full h-full p-5"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-zinc-200 w-full text-justify">
                {dict.aboutSection.bio}
              </p>
              <p className="text-zinc-400 w-full text-center text-xl">
                {dict.aboutSection.moreAbout}
              </p>
              <Link href={`/${lang}/#projects`}>
                <Button variant="terminal">
                  <p className="text-zinc-200 text-xl font-bold">
                    {dict.aboutSection.myProjectsButton}
                  </p>
                </Button>
              </Link>
            </div>
          </div>
        </ScrollSection>
        <ScrollSection color={color} year={"2015"}>
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
