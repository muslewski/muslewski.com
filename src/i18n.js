import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

// Sprawdź zapisany język w localStorage
const savedLanguage =
  localStorage.getItem("language") || navigator.language.split("-")[0] || "pl";

i18n
  .use(initReactI18next)
  .use(HttpApi) // Użyj backendu HTTP do ładowania plików tłumaczeń
  .init({
    fallbackLng: "pl",
    lng: savedLanguage,
    backend: {
      loadPath: "/muslewski/locales/{{lng}}/translation.json", //! Do zmiany /muslewski
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
export { savedLanguage };
