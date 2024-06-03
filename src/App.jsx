import { useState } from "react";
import { useTranslation } from "react-i18next";
import { savedLanguage } from "./i18n";
import useTheme from "./useTheme";
import useSound from "./useSound";
import initialSoundWav from "./assets/sounds/initial.mp3";

import Button from "./components/Button";

function App() {
  const [language, setLanguage] = useState(savedLanguage);
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useTheme();
  const { soundEnabled, toggleSound, playSound, initialSound } = useSound();

  function changeLanguage(lng) {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Zapisz wybór języka
  }

  return (
    <>
      <div className="flex gap-5 bg-red-300 dark:bg-slate-500 w-fit [&>*]:border">
        <Button
          playSound={playSound}
          onClick={() => changeLanguage(language === "pl" ? "en" : "pl")}
        >
          {t("TranslationButton")}
        </Button>
      </div>

      <div className="flex gap-5 bg-red-300 dark:bg-slate-500 w-fit [&>*]:border">
        <Button
          playSound={playSound}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Change to {theme === "dark" ? "light" : "dark"}
        </Button>
      </div>

      <div className="flex gap-5 bg-red-300 dark:bg-slate-500 w-fit [&>*]:border">
        <Button
          onClick={() => {
            toggleSound();
            if (soundEnabled != "on") initialSound(initialSoundWav);
          }}
        >
          {soundEnabled === "on" ? "Disable Sound" : "Enable Sound"}
        </Button>
      </div>

      <h1 className="">{t("Welcome")}</h1>
      <h2>{t("Description")}</h2>
      <Button playSound={playSound}>test</Button>
    </>
  );
}

export default App;
