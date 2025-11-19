import { Scroller } from "@/components/scrollingHistory/scroller";
import { ScrollSection } from "@/components/scrollingHistory/scrollSection";

export function AboutSection() {
  return (
    <section className="w-full min-h-dvh bg-zinc-950">
      <Scroller>
        <ScrollSection year={2017} children="aa" isOnStart />
        <ScrollSection year={2018} children="aa" />
        <ScrollSection year={2022} children="aa" isOnEnd/>
      </Scroller>
    </section>
  );
}
