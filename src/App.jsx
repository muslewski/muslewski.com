import { useState } from "react";
import { useTranslation } from "react-i18next";
import Settings from "./components/settings/Settings";
import Wrapper from "./components/Wrapper/Wrapper";
import Welcome from "./components/1SectionHero/Welcome";
import Introduction from "./components/2SectionIntroduction/Introduction";
import Projects from "./components/3SectionProjects/Projects";
import Tools from "./components/4SectionTools/Tools";
import Education from "./components/5SectionEducation/Education";
import Contact from "./components/6SectionContact/Contact";
import Footer from "./components/7SectionFooter/Footer";
import useTheme from "./helpers/useTheme";

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useTheme();

  return (
    <div className="flex flex-col bg-white  dark:bg-secondary-dark w-full">
      <Wrapper theme={theme} />
      {/* <Settings /> */}
      <Welcome setTheme={setTheme} theme={theme} />
      <Introduction />
      <Projects />
      <Tools theme={theme} />
      <Education />
      <Contact />
      <Footer />

      <hr className="opacity-0 pb-20" />
    </div>
  );
}

export default App;
