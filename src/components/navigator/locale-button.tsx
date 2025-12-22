"use client";
import { useSetPreferredLanguage } from "@/hooks/set-prefered-language";
import { motion } from "framer-motion";
import { usePreferredLanguage } from "@/hooks/use-prefered-language";
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";

export function LocaleButton() {
  const { lang } = usePreferredLanguage();
  const { setLanguage } = useSetPreferredLanguage();

  const toggleLanguage = () => {
    const newLang = lang === "EN" ? "PT-BR" : "EN";
    setLanguage(newLang);
  };

  return (
    <>
      {lang === "EN" && (
        <motion.button
          initial={{
            rotate: 180,
          }}
          animate={{
            rotate: 0,
          }}
          type="button"
          onClick={toggleLanguage}
          className="text-2xl m-2 md:m-0 text-zinc-200 p-2 mr-2 rounded-full bg-zinc-200/10 border border-zinc-200/20 
        cursor-pointer hover:bg-zinc-300/20 transition-all hover:scale-110 active:scale-95"
          aria-label={"Mudar para Português"}
        >
          <GiUsaFlag />
        </motion.button>
      )}

      {lang === "PT-BR" && (
        <motion.button
          initial={{
            rotate: 180,
          }}
          animate={{
            rotate: 0,
          }}
          type="button"
          onClick={toggleLanguage}
          className="text-2xl m-2 md:m-0 text-zinc-200 p-2 mr-2 rounded-full bg-zinc-200/10 border border-zinc-200/20 
        cursor-pointer hover:bg-zinc-300/20 transition-all hover:scale-110 active:scale-95"
          aria-label={"Switch to English"}
        >
          <GiBrazilFlag />
        </motion.button>
      )}
    </>
  );
}
