import pol_med from "../../assets/pol-med.png";
import hammer from "../../assets/hammer.gif";
import dog from "../../assets/dog.png";
import kraina_psa from "../../assets/kraina-psa.png";
import liceum7 from "../../assets/7lo.png";
import school from "../../assets/school.png";
import github from "../../assets/github-sign.png";
import { useState } from "react";
import Subtitle from "../Shared/Subtitle";
import Button from "../Shared/Button";
import Section from "../Shared/Section";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <Section className="mt-40">
        <Subtitle>
          Projekty
          <hr className="self-start h-3 mt-1 rounded-md border-0 bg-gradient-to-r from-secondary to-secondary/20" />
        </Subtitle>

        <div className="mt-12 flex flex-col gap-24">
          <ProjectCard
            className="mt-20"
            title="Pol - Med"
            link="https://pol-med.tech"
            backgroundColor="#240da5"
            secondBackgroundColor="#0D005B"
            icon={
              <img
                className="w-56 absolute -top-20 right-0"
                src={hammer}
                alt="Hammer"
              />
            }
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
              <img className="w-28 absolute -top-16 right-5" src={dog} alt="" />
            }
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
                className="w-28 absolute -top-16 -right-1 rotate-6 animate-wiggle"
                src={liceum7}
                alt=""
              />
            }
            thumbnail={school}
            paragraph="Oficjalna strona reprezentacyjna VII Liceum w Bydgoszczy. Wykonana przy użyciu React 
            i Tailwind CSS, strona prezentuje informacje o szkole, wydarzeniach i osiągnięciach uczniów, jednocześnie 
            zapewniając nowoczesny i atrakcyjny wygląd."
          />

          <div className="mt-16">
            <Button
              tag="a"
              className="flex items-center justify-center gap-6 bg-gradient-to-br from-gray-950 to-gray-700/90"
              href="https://github.com/KentoDecem"
              target="_blank"
            >
              Odkryj Więcej
              <img className="w-11" src={github} alt="" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Projects;
