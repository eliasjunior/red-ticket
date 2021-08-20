import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { ES_ARGENTINA } from "./languages/es-AR";
import { PT_BRASIL } from "./languages/pt-BR";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: ES_ARGENTINA,
      },
      pt: {
        translation: PT_BRASIL,
      },
    },
  });

i18n.changeLanguage("pt");
