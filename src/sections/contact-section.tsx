import { Divider } from "@/components/divider";
import { Terminal } from "@/components/terminal";
import { TerminalSection } from "@/components/terminal/terminal-section";

export function ContactPage() {
  return (
    <section
      className="w-full min-h-dvh bg-zinc-950 flex items-center justify-center flex-col p-2"
      id="contact"
    >
      <Divider />
      <div className="w-full py-6 px-4 flex items-center justify-center">
        <h1 className="text-4xl text-zinc-200 font-bold">Get in touch</h1>
      </div>

      <TerminalSection />
    </section>
  );
}
