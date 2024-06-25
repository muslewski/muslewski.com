import { useTranslation } from "react-i18next";

import fota from "../../assets/fotaLower.png";
import fotaDark from "../../assets/fotaLowerDark.png";
import fotaBefore from "../../assets/fotaBefore.svg";
import fotaBeforeDark from "../../assets/fotaBeforeDark.svg";
import fotaRaw from "../../assets/fota_raw.jpg";
import person from "../../assets/person.png";
import arrow from "../../assets/Arrow.svg";
import arrowDark from "../../assets/arrowDark.svg";
import Menu from "./Menu";
import Title from "../Shared/Title";
import Section from "../Shared/Section";
import Brief from "../Shared/Brief";
import Photo3d from "./Photo3d";

function WelcomeSection({ setTheme, theme, hrLeft }) {
  const { t, i18n } = useTranslation();

  return (
    <Section className="relative items-center max-w-7xl">
      <Menu setTheme={setTheme} theme={theme} hrLeft={hrLeft} />
      <div className="flex flex-col lg:flex-row-reverse lg:gap-12 justify-center pt-10 lg:pt-0 lg:px-12 2xl:px-0  2xl:justify-between w-full max-w-7xl items-center min-h-[90vh] lg:h-screen ">
        <div className="h-80 lg:pr-16 lg:pb-16 lg:h-3/5 relative flex justify-center ">
          <img
            className="h-full relative z-20 object-contain xl:hidden"
            src={theme === "dark" ? fota : fota}
            alt=""
          />
          <Photo3d fota={theme === "dark" ? fota : fota} />
          <img
            className=" hidden lg:flex absolute h-3/4 w-3/4 -bottom-10 xl:-bottom-16 right-0 z-0"
            src={theme === "dark" ? fotaBeforeDark : fotaBefore}
            alt=""
          />
        </div>
        {/* <img src={person} className="h-80 person-img blob-border-radius" /> */}

        <div className="flex flex-col justify-center  items-center lg:gap-6 max-w-3xl ">
          <Title className="self-start">
            {t("Welcome")}
            <b className="font-medium">{t("Mati")}</b>.
          </Title>

          <Brief className="hidden lg:flex text-center xl:text-left lg:text-3xl max-w-2xl lg:leading-normal">
            {t("WelcomeBrief")}
          </Brief>

          <a href="#wprowadzenie">
            <img
              className="mt-10 w-5 lg:w-7 lg:relative lg:top-12 animate-bounce animate-infinite animate-duration-[1500ms] animate-delay-500 animate-ease-in-out"
              src={theme === "dark" ? arrowDark : arrow}
              alt=""
            />
          </a>
        </div>
      </div>
    </Section>
  );
}

export default WelcomeSection;
