import type { Dicitionary } from "@/app/[lang]/dictionaries";
import { type ColorOfDivision, Divider } from "@/components/divider";
import { TerminalSection } from "@/components/terminal/terminal-section";

interface ContactPageProps {
  dict: Dicitionary;
  color: ColorOfDivision;
}
export function ContactPage({ dict, color }: ContactPageProps) {
  return (
    <section
      className="w-full min-h-svh bg-zinc-950 flex items-center justify-center flex-col p-2"
      id="contact"
    >
      <Divider color={color} />

      <TerminalSection colorOfOverlay={color} dict={dict} />
    </section>
  );
}
