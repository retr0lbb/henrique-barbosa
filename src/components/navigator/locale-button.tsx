"use client";
import { useSetPreferredLanguage } from "@/hooks/set-prefered-language";
import { usePreferredLanguage } from "@/hooks/use-prefered-language";
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";

export function LocaleButton() {
  const { lang } = usePreferredLanguage();
  const { setLanguage } = useSetPreferredLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = lang === "en-US" ? "pt-BR" : "en-US";
    setLanguage(newLang);

    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <>
      {lang === "en-US" && (
        <button
          type="button"
          onClick={toggleLanguage}
          className="text-2xl m-2 md:m-0 text-zinc-200 p-2 mr-2 rounded-full bg-zinc-200/10 border border-zinc-200/20 
        cursor-pointer hover:bg-zinc-300/20 transition-all hover:scale-110 active:scale-95"
          aria-label="Mudar para Português"
        >
          <GiBrazilFlag />
        </button>
      )}

      {lang === "pt-BR" && (
        <button
          type="button"
          onClick={toggleLanguage}
          className="text-2xl m-2 md:m-0 text-zinc-200 p-2 mr-2 rounded-full bg-zinc-200/10 border border-zinc-200/20 
        cursor-pointer hover:bg-zinc-300/20 transition-all hover:scale-110 active:scale-95"
          aria-label="Switch to English"
        >
          <GiUsaFlag />
        </button>
      )}
    </>
  );
}
