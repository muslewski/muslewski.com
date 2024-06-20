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

function App() {
  const { t, i18n } = useTranslation();
  const [primaryColor, setPrimaryColor] = useState("pink");

  return (
    <div className="flex flex-col bg-white w-full">
      <Wrapper primaryColor={primaryColor} />
      {/* <Settings /> */}
      <Welcome />
      <Introduction />
      <Projects />
      <Tools />
      <Education />
      <Contact />
      <Footer />

      <hr className="opacity-0 pb-16" />
    </div>
  );
}

export default App;
