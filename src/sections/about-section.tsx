import { Scroller } from "@/components/scrollingHistory/scroller";
import { ScrollSection } from "@/components/scrollingHistory/scrollSection";
import Image from "next/image";
import Fursuit from "@/assets/images/fursuit.jpg";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="w-full min-h-dvh bg-zinc-950">
      <h1 className="w-full text-center pb-24 text-zinc-200 text-6xl font-bold">
        About Me
      </h1>
      <Scroller>
        <ScrollSection isOnStart>
          <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-4 p-10">
            <div className="col-span-2 row-span-2 aspect-square w-full h-full bg-linear-to-bl from-zinc-200/5 to-zinc-200/10 border border-zinc-200/15 rounded-lg">
              <Image
                alt="fusito"
                className="w-full h-full object-cover p-4 rounded-full"
                src={Fursuit}
              />
            </div>

            <div className="col-span-3 flex items-center justify-center gap-8 flex-col h-full bg-white/5 border border-zinc-200/10 px-5 backdrop-blur-lg">
              <h1 className="text-6xl text-zinc-200 font-bold">
                Henrique Barbosa Sampaio
              </h1>

              <p className="text-2xl font-bold text-zinc-400">
                Software Developer | Web Developer | Much More
              </p>
            </div>
            <div className="col-span-3 row-span-2 flex items-center justify-center gap-8 flex-col h-full bg-white/5 border border-zinc-200/10 px-5 py-4">
              <h1 className="text-4xl text-zinc-200">Work Experience</h1>
              <div className="flex flex-1 items-center justify-center flex-col">
                <div className="w-full h-auto p-4 bg-linear-to-bl from-zinc-200/5 to-zinc-200/10 border border-white/25 backdrop-blur-2xl">
                  <p className="text-zinc-200">Nubank</p>
                </div>
              </div>
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

        <ScrollSection year={"2050"}>
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
