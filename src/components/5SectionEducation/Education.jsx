import React from "react";
import Section from "../Shared/Section";
import Subtitle from "../Shared/Subtitle";
import GradientLine from "../Shared/GradientLine";
import EducationObject from "./EducationObject";

import verticalLine from "../../assets/verticalLine.svg";
import Brief from "../Shared/Brief";

import { useRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";

function Education() {
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);
  return (
    <Section className="mt-40">
      <Subtitle>
        Edukacja
        <GradientLine />
      </Subtitle>
      {/* <Brief>
        Dyplom? Fajnie, ale co dalej? Moja prawdziwa edukacja to ciągła nauka i
        zdobywanie doświadczenia w realnych projektach.
      </Brief> */}
      <Brief>
        Moja przygoda edukacyjna ciągle trwa, obejmuje szkołę średnią i
        planowaną uczelnię.
      </Brief>
      <div className="mt-20 self-start h-56 flex flex-col  justify-start gap-16 text-xl font-description relative">
        <div
          ref={ref}
          className={`absolute h-full w-6 left-20 animate-duration-[3000ms] animate-ease-out ${
            isVisible ? "animate-fade" : "opacity-0"
          }`}
        >
          <img className="h-full w-full" src={verticalLine} alt="" />
        </div>
        <EducationObject
          year="2024"
          achievment="Międzynarodowe Liceum Sokrates"
        />
        <EducationObject year="2025" achievment="Politechnika Bydgoska" />
      </div>
    </Section>
  );
}

export default Education;
