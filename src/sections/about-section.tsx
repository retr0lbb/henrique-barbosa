import { Scroller } from "@/components/scrollingHistory/scroller";
import { ScrollSection } from "@/components/scrollingHistory/scrollSection";
import Image from "next/image";
import Me from "@/assets/images/Ryan_Gosling_v4.webp";
import Background from "@/assets/images/pixel-art-computer-linux-pixels-code-hd-wallpaper-preview.jpg";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="w-full min-h-dvh bg-zinc-950">
      <h1 className="w-full text-center pb-24 text-zinc-200 text-6xl font-bold">
        About Me
      </h1>
      <Scroller>
        <ScrollSection isOnStart>
          <div className="w-full h-full grid grid-cols-2 grid-rows-2 place-items-center gap-8 p-10">
            <div className="aspect-square max-w-[450px] object-cover rounded-xl overflow-hidden">
              <Image
                alt="Ryan Gosling"
                className="w-full h-full object-cover"
                src={Me}
              />
            </div>

            <div className="object-cover rounded-xl overflow-hidden">
              <Image
                alt="Ryan Gosling"
                className="w-full h-full object-cover"
                src={Background}
              />
            </div>

            <div className="w-full h-full overflow-hidden flex items-center justify-center flex-col col-span-2 gap-10 p-2">
              <p className="text-3xl text-zinc-200 text-center">
                Hello my name is{" "}
                <strong className="animate-pulse text-blue-500">
                  Henrique Barbosa
                </strong>
                , And I'm a Software Developer, If you want to Know more about
                me Keep Scrolling
              </p>

              <div className="flex flex-col w-full items-center justify-center gap-8">
                <p className="text-xl text-zinc-400 w-full text-center">
                  If you've seen enough, lets cut the chase and take a look at
                  my{" "}
                  <Link
                    href={"/"}
                    className="text-zinc-200 hover:underline hover:text-zinc-50 transition-all"
                  >
                    projects
                  </Link>
                </p>
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
