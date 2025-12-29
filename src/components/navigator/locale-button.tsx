"use client";
import { useSetPreferredLanguage } from "@/hooks/set-prefered-language";
import { motion } from "framer-motion";
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

    // Extrai o locale atual da URL e substitui pelo novo
    const segments = pathname.split("/");
    segments[1] = newLang; // Substitui o locale (primeira posição após /)
    const newPath = segments.join("/");

    // Navega para a nova URL com o locale atualizado
    router.push(newPath);
  };

  return (
    <>
      {lang === "en-US" && (
        <motion.button
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          type="button"
          onClick={toggleLanguage}
          className="text-2xl m-2 md:m-0 text-zinc-200 p-2 mr-2 rounded-full bg-zinc-200/10 border border-zinc-200/20 
        cursor-pointer hover:bg-zinc-300/20 transition-all hover:scale-110 active:scale-95"
          aria-label="Mudar para Português"
        >
          <GiBrazilFlag />
        </motion.button>
      )}

      {lang === "pt-BR" && (
        <motion.button
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          type="button"
          onClick={toggleLanguage}
          className="text-2xl m-2 md:m-0 text-zinc-200 p-2 mr-2 rounded-full bg-zinc-200/10 border border-zinc-200/20 
        cursor-pointer hover:bg-zinc-300/20 transition-all hover:scale-110 active:scale-95"
          aria-label="Switch to English"
        >
          <GiUsaFlag />
        </motion.button>
      )}
    </>
  );
}
