import { useTranslation } from "react-i18next";
import Settings from "./components/settings/Settings";
import Wrapper from "./components/Wrapper/Wrapper";
import WelcomeSection from "./components/WelcomeSection";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-start">
      <Wrapper />
      {/* <Settings /> */}
      <WelcomeSection />
      <Introduction />
      <Projects />

      <hr className="opacity-0 pb-44" />
    </div>
  );
}

export default App;
