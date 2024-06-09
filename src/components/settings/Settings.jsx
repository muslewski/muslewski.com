import { useState } from "react";
import { useTranslation } from "react-i18next";
import { savedLanguage } from "../../helpers/i18n";
import useTheme from "../../helpers/useTheme";
import useSound from "../../helpers/useSound";
import initialSoundWav from "../../assets/sounds/initial.mp3";
import SettingsButton from "./SettingsButton";

function Settings() {
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
    <div className="flex flex-col gap-5 w-fit">
      <Button
        playSound={playSound}
        onClick={() => changeLanguage(language === "pl" ? "en" : "pl")}
      >
        {t("TranslationButton")}
      </Button>

      <Button
        playSound={playSound}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Change to {theme === "dark" ? "light" : "dark"}
      </Button>

      <Button
        onClick={() => {
          toggleSound();
          if (soundEnabled != "on") initialSound(initialSoundWav);
        }}
      >
        {soundEnabled === "on" ? "Disable Sound" : "Enable Sound"}
      </Button>
    </div>
  );
}

export default Settings;
