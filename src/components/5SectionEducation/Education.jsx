import React from "react";
import Section from "../Shared/Section";
import Subtitle from "../Shared/Subtitle";
import GradientLine from "../Shared/GradientLine";
import EducationObject from "./EducationObject";

import verticalLine from "../../assets/verticalLine.svg";
import Brief from "../Shared/Brief";

import { useRef, forwardRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";

const Education = forwardRef(function Education(props, refEducation) {
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);
  return (
    <Section id="edukacja" className="pt-40 lg:pt-60 justify-start max-w-7xl">
      <div ref={refEducation} className="bg-emerald-300">
        <Subtitle>Edukacja</Subtitle>
        <GradientLine />

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
            className={`absolute h-full w-6 left-20 lg:left-[7rem] animate-duration-[3000ms] animate-ease-out ${
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
      </div>
    </Section>
  );
});

export default Education;
