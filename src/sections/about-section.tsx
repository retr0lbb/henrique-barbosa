import { Scroller } from "@/components/scrollingHistory/scroller";
import { ScrollSection } from "@/components/scrollingHistory/scrollSection";
import Image from "next/image";
import Me from "@/assets/images/Ryan_Gosling_v4.webp";
import { WorkExperienceCard } from "@/components/work-experience-card";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="w-full min-h-dvh bg-zinc-950">
      <h1 className="w-full text-center pb-24 text-zinc-200 text-6xl font-bold">
        About Me
      </h1>
      <Scroller>
        <ScrollSection isOnStart year="Myself">
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

            <div className="col-span-3 flex items-center justify-center gap-8 flex-col h-full px-5 backdrop-blur-lg">
              <h1 className="text-3xl text-center md:text-5xl lg:text-6xl text-zinc-200 font-bold">
                Henrique Barbosa Sampaio
              </h1>

              <p className="text-sm md:text-xl lg:text-2xl font-bold text-zinc-400">
                Software Developer | Web Developer | Much More
              </p>
            </div>

            <div className="col-span-2 md:col-span-3 md:row-span-2 flex items-center justify-center gap-8 flex-col h-full md:px-5 py-4">
              <h1 className="text-4xl text-zinc-200">Work Experience</h1>
              <div className="flex flex-1 items-center gap-4 flex-col md:px-6">
                <WorkExperienceCard.Root
                  company_or_person="PicBrand"
                  duration="03/2025 - 06/2025"
                  job_function="Fullstack Junior Web Engineer"
                  model_of_contract="PJ"
                >
                  <WorkExperienceCard.KeyPoint>
                    Worked with REST API and Scrapper Bots in python for backend
                    and also specialized frontend development with react for a
                    event totem.
                  </WorkExperienceCard.KeyPoint>

                  <WorkExperienceCard.KeyPoint>
                    I have developed resilient and versatile software focused on
                    events interaction and data collection with was used in
                    several event points across country.
                  </WorkExperienceCard.KeyPoint>
                </WorkExperienceCard.Root>

                <WorkExperienceCard.Root
                  company_or_person="Boom Sneakers"
                  duration="06/2024 - 09/2024"
                  job_function="Front End Developer"
                  model_of_contract="Project"
                >
                  <WorkExperienceCard.KeyPoint>
                    Helped in a team of developers to create the website
                    BoomSneakers.
                  </WorkExperienceCard.KeyPoint>
                  <WorkExperienceCard.KeyPoint>
                    Worked with Deploy, Domain Name System, Database
                    configuration, frontend development and custom module
                    development in PHP.
                  </WorkExperienceCard.KeyPoint>
                </WorkExperienceCard.Root>
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-center justify-center gap-6 w-full h-full p-5">
              <p className="text-xl md:text-2xl lg:text-3xl text-zinc-200 w-full text-justify">
                I'm A Brazilian Software Developer, I have proficiency in
                programming languages like Javascript, Typescript, Rust and
                other more.
              </p>
              <p className="text-zinc-400 w-full text-center text-xl">
                If you want to know more about myself keep scrolling. If you
                have seen enough, lets cut the chase, take a look at{" "}
                <Link
                  className="text-zinc-200 hover:text-cyan-500 text-2xl transition-all"
                  href={"#projects"}
                >
                  MY PROJECTS
                </Link>
              </p>
            </div>
          </div>
        </ScrollSection>
        <ScrollSection year={"2015"}>
          <div className="w-full h-full flex flex-col items-center justify-center gap-12">
            <h1 className="text-4xl font-bold text-zinc-200">
              My Fist Contact With Technology
            </h1>
            <p className="max-w-[700px] text-lg text-justify text-zinc-300">
              In 2015 I have started a course in game development, in the past i
              had developed a few little games, i always was fascinated about
              how things works in games, always using maths and stuffs.
            </p>
          </div>
        </ScrollSection>
        <ScrollSection year={"2024"}>
          <div className="w-full h-full flex flex-col items-center justify-center gap-12">
            <p className="max-w-[700px] text-xl text-justify text-zinc-200">
              In 2024 I have finished Tec Highschool in Software development and
              analysis. right after before that, I entered in the Faculty of
              Technology of Cotia with I am studying right now until 2027.
            </p>
          </div>
        </ScrollSection>

        <ScrollSection year={"2050"} isOnEnd>
          <div className="w-full h-full flex flex-col items-center justify-center gap-12">
            <p className="max-w-[700px] text-xl text-justify text-zinc-200">
              By the year 2025, I plan to be at least a PHD with a doctored in
              Computer Science, I plan to have a lot of Scientific Articles
              Published and trying to make the diference in the world.
            </p>
          </div>
        </ScrollSection>
      </Scroller>
    </section>
  );
}
