import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries: Record<Locale, () => Promise<any>> = {
  "en-US": () =>
    import("./dictionaries/en-US.json").then((module) => module.default),
  "pt-BR": () =>
    import("./dictionaries/pt-BR.json").then((module) => module.default),
};

export const isValidLocale = (locale: string): locale is Locale => {
  return locale in dictionaries;
};

export const getDictionary = async (locale: Locale): Promise<any> => {
  return dictionaries[locale]();
};
