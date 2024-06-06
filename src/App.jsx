import { useTranslation } from "react-i18next";
import Settings from "./components/settings/Settings";
import Wrapper from "./components/Wrapper/Wrapper";
import WelcomeSection from "./components/WelcomeSection";
import Introduction from "./components/Introduction";

import line from "./assets/linia.svg";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-start">
      <Wrapper />
      {/* <Settings /> */}
      <WelcomeSection />
      <Introduction />

      <img className="self-center my-28  w-3/4" src={line} alt="" />

      <section className="mx-10 p-1 flex flex-col w-3/4 self-center">
        <h2 className="self-start text-secondary font-title text-3xl">
          Projekty
        </h2>
        <div className="self-center mt-12 h-40 w-full bg-slate-200"></div>
      </section>

      <hr className="opacity-0 pb-44" />
    </div>
  );
}

export default App;
