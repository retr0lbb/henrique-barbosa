export function usePreferredLanguage(): { lang: "EN" | "PT-BR" } {
  const preferredLanguage = localStorage.getItem("@hbs:idiom") as
    | "PT-BR"
    | "EN"
    | null;

  if (!preferredLanguage) {
    localStorage.setItem("@hbs:idiom", "PT-BR");
    return { lang: "PT-BR" };
  }

  return { lang: preferredLanguage };
}
