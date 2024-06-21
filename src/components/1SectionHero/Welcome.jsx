import React from "react";

import fota from "../../assets/fota.png";
import fotaBefore from "../../assets/fotaBefore.svg";
import fotaRaw from "../../assets/fota_raw.jpg";
import person from "../../assets/person.png";
import arrow from "../../assets/Arrow.svg";
import arrowDark from "../../assets/arrowDark.svg";
import Menu from "./Menu";
import Title from "../Shared/Title";
import Section from "../Shared/Section";
import Brief from "../Shared/Brief";

function WelcomeSection({ setTheme, theme }) {
  return (
    <Section className="relative items-center">
      <Menu setTheme={setTheme} theme={theme} />
      <div className="flex flex-col lg:flex-row-reverse justify-center pt-10 lg:pt-0 lg:justify-between w-full max-w-7xl items-center min-h-[90vh] lg:h-screen ">
        <div className="h-80 lg:pr-16 lg:pb-16 lg:h-3/5 relative flex justify-center">
          <img
            className="h-full relative z-20 object-contain"
            src={fota}
            alt=""
          />
          <img
            className=" hidden lg:flex absolute bottom-0 right-0 z-0"
            src={fotaBefore}
            alt=""
          />
        </div>
        {/* <img src={person} className="h-80 person-img blob-border-radius" /> */}

        <div className="flex flex-col justify-center  items-center lg:gap-6 max-w-3xl ">
          <Title className="lg:text-center self-start">
            Cześć, jestem <b className="font-medium">Mateusz</b>.
          </Title>

          <Brief className="hidden lg:flex lg:text-3xl max-w-2xl lg:leading-normal">
            Potrzebujesz strony, która przyciągnie klientów i pomoże Ci wyróżnić
            się na tle konkurencji?
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
