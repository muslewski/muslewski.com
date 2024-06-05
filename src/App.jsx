import { useTranslation } from "react-i18next";
import Settings from "./components/settings/Settings";
import Wrapper from "./components/Wrapper";
import WelcomeSection from "./components/WelcomeSection";

import developmentGif from "./assets/development.gif";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Wrapper />
      {/* <Settings /> */}
      <WelcomeSection />

      <section className="overflow-hidden mx-10 p-1 flex flex-col items-center">
        <h2 className="flex justify-center gap-0 items-center font-title text-4xl mt-24">
          <span className="w-52 text-secondary">Full Stack Developer</span>
          <img className="h-28" src={developmentGif} alt="" />
        </h2>
        <p className="font-description text-xl mt-10 leading-normal">
          Uwielbiam tworzyć nowoczesne strony i aplikacje internetowe.
          <hr className="opacity-0 py-1.5" />
          <b className="font-semibold">Im trudniejszy projekt, tym lepiej!</b>
          <hr className="opacity-0 py-1.5" />
          Współpracując ze mną, zyskasz technicznego eksperta i partnera, który
          z pasją przekształca Twoje pomysły w rzeczywistość.
        </p>
      </section>

      <hr className="opacity-0 pb-44" />
    </>
  );
}

export default App;
