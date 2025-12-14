// src/hooks/set-prefered-language.tsx
"use client";

export function useSetPreferredLanguage() {
  const setLanguage = (lang: "EN" | "PT-BR") => {
    // Salva no localStorage
    localStorage.setItem("@hbs:idiom", lang);

    // Salva no cookie (365 dias de validade)
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `preferred_language=${lang};${expires};path=/;SameSite=Lax`;

    // Dispara evento customizado para outros componentes reagirem
    window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }));
  };

  return { setLanguage };
}
