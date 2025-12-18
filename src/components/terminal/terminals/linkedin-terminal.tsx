import { Button } from "@/components/button";
import Link from "next/link";

export function LinkedInTerminal() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 px-5 py-3">
      <Link
        href={"https://www.linkedin.com/in/henrique-barbosa-sampaio/"}
        className="text-zinc-300 font-code text-4xl hover:text-cyan-300 transition-all hover:underline"
      >
        /in/henrique-barbosa-sampaio/
      </Link>

      <Link href={"https://www.linkedin.com/in/henrique-barbosa-sampaio/"}>
        <Button
          variant="terminal"
          onClick={() => navigator.clipboard.writeText("retr0lbb@gmail.com")}
        >
          Goto LinkedIn
        </Button>
      </Link>
    </div>
  );
}
