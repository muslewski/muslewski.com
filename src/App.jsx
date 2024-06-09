import { useTranslation } from "react-i18next";
import Settings from "./components/settings/Settings";
import Wrapper from "./components/Wrapper/Wrapper";
import WelcomeSection from "./components/1SectionWelcome/Welcome";
import Introduction from "./components/2SectionIntroduction/Introduction";
import Projects from "./components/3SectionProjects/Projects";
import Tools from "./components/4SectionTools/Tools";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-start">
      <Wrapper />
      {/* <Settings /> */}
      <WelcomeSection />
      <Introduction />
      <Projects />
      <Tools />

      <hr className="opacity-0 pb-44" />
    </div>
  );
}

export default App;
