"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function usePreferredLanguage(): { lang: "en-US" | "pt-BR" } {
  const pathname = usePathname();

  // Extrai o locale da URL (ex: /pt/sobre -> "pt")
  const urlLocale = pathname.split("/")[1] as "en-US" | "pt-BR";

  const [lang, setLang] = useState<"en-US" | "pt-BR">(urlLocale || "en-US");

  useEffect(() => {
    // Atualiza o estado quando a URL muda
    if (urlLocale === "en-US" || urlLocale === "pt-BR") {
      setLang(urlLocale);
    }
  }, [urlLocale]);

  useEffect(() => {
    // Escuta mudanças de idioma
    const handleLanguageChange = (event: CustomEvent<"en-US" | "pt-BR">) => {
      setLang(event.detail);
    };

    window.addEventListener(
      "languageChange",
      handleLanguageChange as EventListener,
    );

    return () => {
      window.removeEventListener(
        "languageChange",
        handleLanguageChange as EventListener,
      );
    };
  }, []);

  return { lang };
}
