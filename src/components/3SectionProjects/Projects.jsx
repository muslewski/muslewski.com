import pol_med from "../../assets/pol-med.png";
import hammer from "../../assets/hammer.gif";
import car from "../../assets/car.png";
import dog from "../../assets/dog.png";
import kraina_psa from "../../assets/kraina-psa.png";
import liceum7 from "../../assets/7lo.png";
import school from "../../assets/school.png";
import github from "../../assets/github-sign.png";
import dotsGreen from "../../assets/dotsGreen.svg";
import dotsBlue from "../../assets/dotsBlue.svg";
import dotsPink from "../../assets/dotsPink.svg";

import Subtitle from "../Shared/Subtitle";
import Button from "../Shared/Button";
import Section from "../Shared/Section";
import ProjectCard from "./ProjectCard";

import { useState, useRef, forwardRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";
import GradientLine from "../Shared/GradientLine";
import Brief from "../Shared/Brief";

const Projects = forwardRef(function Projects(props, refProjects) {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1, true);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2, true);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3, true);
  return (
    <Section id="projekty" className="pt-40 lg:pt-60 max-w-7xl">
      <div
        ref={refProjects}
        className="bg-red-300  self-start w-full flex flex-col"
      >
        <Subtitle>Projekty</Subtitle>
        <GradientLine />
        <Brief>
          <span className="flex lg:inline">Rzuć okiem na moje portfolio.</span>{" "}
          Mam nadzieję, że Cię zaintryguje!
        </Brief>

        <div className="mt-20 flex flex-col lg:flex-row flex-wrap gap-20 lg:gap-24 items-end self-start justify-start ">
          <ProjectCard
            className="mt-20"
            title="Pol - Med"
            link="https://pol-med.tech"
            backgroundColor="#240da5"
            secondBackgroundColor="#0D005B"
            icon={
              <img
                ref={ref1}
                className={`w-36 absolute -top-10 right-0 z-10 opacity-0 animate-duration-[2000ms] animate-ease-in-out ${
                  isVisible1 ? "animate-fade-up" : ""
                }`}
                src={car}
                alt=""
              />
            }
            dots={dotsBlue}
            thumbnail={pol_med}
            paragraph="Strona internetowa dla firmy Pol-Med, która oferuje nowoczesne stacje edukacyjne dla branży 
            samochodowej, oleje posmażalnicze UCO oraz szeroki wybór narzędzi przemysłowych. Projekt zrealizowany w Node.js 
            zapewnia łatwą nawigację i dostęp do bogatej oferty firmy."
          />

          <ProjectCard
            className="mt-20"
            title="Kraina Psa"
            link="https://krainapsa.pl"
            backgroundColor="#5cb036"
            secondBackgroundColor="#407a26"
            icon={
              <img
                ref={ref2}
                className={`w-28 absolute -top-16 right-5 z-20 opacity-0 animate-duration-[2000ms] animate-ease-in-out ${
                  isVisible2 ? "animate-fade-up" : ""
                }`}
                src={dog}
                alt=""
              />
            }
            dots={dotsGreen}
            thumbnail={kraina_psa}
            paragraph="Strona internetowa dla salonu groomerskiego, umożliwiająca właścicielom zwierząt 
            rezerwację wizyt na strzyżenie ich pupili. Stworzona w React i Tailwind CSS, strona oferuje 
            szybkie i intuicyjne rezerwacje oraz nowoczesny design."
          />

          <ProjectCard
            className="mt-20"
            title="VII Liceum Bydgoszcz"
            link="https://7lo.bydgoszcz.pl/"
            backgroundColor="#885b8b"
            secondBackgroundColor="#5a3c5d"
            icon={
              <img
                ref={ref3}
                className={`w-28 absolute -top-16 right-2 rotate-6 z-10 animate-duration-[2000ms] animate-ease-in-out ${
                  isVisible3 ? "animate-fade-up" : ""
                }`}
                src={liceum7}
                alt=""
              />
            }
            dots={dotsPink}
            thumbnail={school}
            paragraph="Oficjalna strona reprezentacyjna VII Liceum w Bydgoszczy. Wykonana przy użyciu React 
            i Tailwind CSS, strona prezentuje informacje o szkole, wydarzeniach i osiągnięciach uczniów, jednocześnie 
            zapewniając nowoczesny i atrakcyjny wygląd."
          />

          <div className="mt-6">
            <Button
              tag="a"
              className="flex items-center justify-center gap-6 px-6 bg-gradient-to-br from-gray-900 to-gray-600/80"
              href="https://github.com/muslewski"
              target="_blank"
            >
              Odkryj Więcej
              <img className="w-12" src={github} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Projects;
