import { Button } from "@/components/button";

export function EmailTerminal() {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row gap-4 px-5 py-3">
      <a
        href="mailto:retr0lbb@gmail.com
        ?subject=Contato pelo site
        &body=Oi, vim pelo seu site!"
        className="text-zinc-300 font-code text-2xl md:text-2xl lg:text-4xl hover:text-cyan-300 transition-all hover:underline"
      >
        retr0lbb@gmail.com
      </a>

      <Button
        variant="terminal"
        onClick={() => navigator.clipboard.writeText("retr0lbb@gmail.com")}
      >
        copy
      </Button>
    </div>
  );
}
