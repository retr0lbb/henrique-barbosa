export function useSetPreferredLanguage(lang: "EN" | "PT-BR") {
  localStorage.setItem("@hbs:idiom", lang);
}
