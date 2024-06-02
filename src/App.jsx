import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Zapisz wybór języka
  }

  return (
    <>
      <div className="flex gap-5 bg-red-300 dark:bg-slate-400 w-fit">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("pl")}>PL</button>
      </div>

      <div className="flex gap-5 bg-red-300 w-fit">
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("light")}>Light</button>
      </div>
      <h1 className="">{t("Welcome")}</h1>
      <h2>{t("Description")}</h2>
    </>
  );
}

export default App;
