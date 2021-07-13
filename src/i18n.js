import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

export const languageOptions = {
  en: "EN",
  ja: "日本",
};

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

const valueWithDefault = (value) => {
  if (value in languageOptions) {
    return value;
  } else return "en";
};

export const currentLanguage = () => {
  return valueWithDefault(i18n.language);
};

export default i18n;
