// src/hooks/use-prefered-language.tsx
"use client";

import { useEffect, useState } from "react";

export function usePreferredLanguage(): { lang: "EN" | "PT-BR" } {
  const [lang, setLang] = useState<"EN" | "PT-BR">("EN");

  useEffect(() => {
    // Função para ler cookie
    const getCookie = (name: string): string | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(";").shift() || null;
      }
      return null;
    };

    // Tenta pegar do localStorage primeiro
    const storedLang = localStorage.getItem("@hbs:idiom");

    if (storedLang === "PT-BR" || storedLang === "EN") {
      setLang(storedLang);
    } else {
      // Se não houver no localStorage, verifica o cookie
      const cookieLang = getCookie("preferred_language");

      if (cookieLang === "PT-BR" || cookieLang === "EN") {
        setLang(cookieLang);
        localStorage.setItem("@hbs:idiom", cookieLang);
      } else {
        // Fallback para idioma do navegador
        const browserLang = navigator.language.startsWith("pt")
          ? "PT-BR"
          : "EN";
        setLang(browserLang);
      }
    }

    // Escuta mudanças de idioma
    const handleLanguageChange = (event: CustomEvent<"EN" | "PT-BR">) => {
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
