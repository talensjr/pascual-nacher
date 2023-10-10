import rosetta from "rosetta";
import { ui } from "./ui";
import { defaultLanguage } from "./languages";

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key];
  };
}

export const i18n = rosetta({
  ca: {
    home: {
      title: "Bon dia desde rosetta",
    },
    search: {
      placeholder: "Busca per títol o text",
    },
  },
  es: {
    home: {
      title: "Hola desde rosetta",
    },
    search: {
      placeholder: "Busca por título o texto",
    },
  },
});
