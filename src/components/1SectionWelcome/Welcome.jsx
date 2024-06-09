import React from "react";

import fota from "../../assets/fota.jpg";
import fotaRaw from "../../assets/fota_raw.jpg";
import person from "../../assets/person.png";
import arrow from "../../assets/Arrow.svg";
import Menu from "./Menu";
import Title from "../Shared/Title";
import Section from "../Shared/Section";

function WelcomeSection() {
  return (
    <Section>
      <Menu />
      <img className="h-80" src={fota} alt="" />
      {/* <img src={person} className="h-80 person-img blob-border-radius" /> */}

      <Title>
        Cześć, jestem <b className="font-medium">Mateusz</b>.
      </Title>

      <img
        className="mt-10 animate-bounce animate-infinite animate-duration-[1500ms] animate-delay-500 animate-ease-in-out"
        src={arrow}
        alt=""
      />
    </Section>
  );
}

export default WelcomeSection;
