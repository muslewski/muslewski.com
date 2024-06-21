import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useIsVisible } from "./helpers/useIsVisible";

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

  const [visibleSections, setVisibleSections] = useState({
    Introduction: false,
    Projects: false,
    Tools: false,
    Education: false,
  });

  const refs = {
    Introduction: useRef(),
    Projects: useRef(),
    Tools: useRef(),
    Education: useRef(),
  };

  const isVisible = {
    Introduction: useIsVisible(refs.Introduction, false),
    Projects: useIsVisible(refs.Projects, false),
    Tools: useIsVisible(refs.Tools, false),
    Education: useIsVisible(refs.Education, false),
  };

  console.log(visibleSections);

  useEffect(() => {
    setVisibleSections({
      Introduction: isVisible.Introduction,
      Projects: isVisible.Projects,
      Tools: isVisible.Tools,
      Education: isVisible.Education,
    });
  }, [
    isVisible.Introduction,
    isVisible.Projects,
    isVisible.Tools,
    isVisible.Education,
  ]);

  return (
    <div className="flex flex-col bg-white dark:bg-background bg-gradient-to-br from-secondary-light to-secondary-light2 dark:from-secondary-dark dark:to-secondary-dark2 w-full">
      <Wrapper theme={theme} />
      {/* <Settings /> */}
      <Welcome setTheme={setTheme} theme={theme} />
      <Introduction ref={refs.Introduction} />
      <Projects ref={refs.Projects} />
      <Tools ref={refs.Tools} theme={theme} />
      <Education ref={refs.Education} />
      <Contact />
      <Footer />

      <hr className="opacity-0 pb-20" />
    </div>
  );
}

export default App;
