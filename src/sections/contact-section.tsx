import type { Dicitionary } from "@/app/[lang]/dictionaries";
import { Divider } from "@/components/divider";
import { TerminalSection } from "@/components/terminal/terminal-section";

interface ContactPageProps {
  dict: Dicitionary;
}
export function ContactPage({ dict }: ContactPageProps) {
  return (
    <section
      className="w-full min-h-svh bg-zinc-950 flex items-center justify-center flex-col p-2"
      id="contact"
    >
      <Divider />

      <TerminalSection dict={dict} />
    </section>
  );
}
