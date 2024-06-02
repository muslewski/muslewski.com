import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("pl")}>PL</button>

      <h1>{t("Welcome")}</h1>
    </>
  );
}

export default App;
