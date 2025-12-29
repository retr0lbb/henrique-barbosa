/** biome-ignore-all lint/suspicious/noArrayIndexKey: <forgetAbout it> */
import { Scroller } from "@/components/scrollingHistory/scroller";
import { ScrollSection } from "@/components/scrollingHistory/scrollSection";
import Image from "next/image";
import Me from "@/assets/images/profile.jpeg";
import { WorkExperienceCard } from "@/components/work-experience-card";
import Link from "next/link";
import { Divider } from "@/components/divider";
import { Button } from "@/components/button";
import type { Dicitionary } from "@/app/[lang]/dictionaries";

interface AboutSectionProps {
  dict: Dicitionary;
  lang: string;
}

export function AboutSection({ dict, lang }: AboutSectionProps) {
  return (
    <section className="w-full min-h-svh bg-zinc-950 mt-5" id="about">
      <Divider />
      <h1 className="w-full text-center pb-24 text-zinc-200 text-5xl md:text-6xl font-bold py-4">
        {dict.aboutSection.title}
      </h1>
      <Scroller>
        <ScrollSection isOnStart year={dict.aboutSection.sideBar}>
          <div className="w-full h-full grid grid-cols-2 grid-rows-[auto_auto_auto_auto] md:grid-cols-5 md:grid-rows-3 gap-4 p-4 md:p-10">
            <div className="col-span-2 md:row-span-2 w-full h-full rounded-lg flex items-center justify-center">
              <div className="aspect-square w-full h-auto">
                <Image
                  alt="Image of ryan gosling"
                  className="w-full h-full object-cover rounded-full p-4"
                  src={Me}
                />
              </div>
            </div>

            <div className="col-span-2 md:col-span-3 md:row-span-3 flex items-center justify-center gap-8 flex-col h-full md:px-5 py-4">
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

            <div className="col-span-2 flex flex-col items-center justify-center gap-6 w-full h-full p-5">
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
        <ScrollSection year={"2015"}>
          <div className="w-full h-full flex flex-col items-center justify-center gap-12">
            <h1 className="text-2xl text-center md:text-3xl lg:text-4xl lg:text-left font-bold text-zinc-200">
              {dict.historyTime[2015].title}
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-justify text-zinc-300">
              {dict.historyTime[2015].desc}
            </p>
          </div>
        </ScrollSection>
        <ScrollSection year={"2024"}>
          <div className="w-full h-full flex flex-col items-center justify-center gap-12">
            <h1 className="text-2xl text-center md:text-3xl lg:text-4xl lg:text-left font-bold text-zinc-200">
              {dict.historyTime[2024].title}
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-justify text-zinc-200">
              {dict.historyTime[2024].desc}
            </p>
          </div>
        </ScrollSection>

        <ScrollSection year={"2050"} isOnEnd>
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
