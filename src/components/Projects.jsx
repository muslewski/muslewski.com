import line from "../assets/linia.svg";
import line2 from "../assets/linia2.svg";
import pol_med from "../assets/pol-med.png";
import HammerGif from "../components/HammerGif";
import dog from "../assets/dog.png";
import kraina_psa from "../assets/kraina-psa.png";
import liceum7 from "../assets/7lo.png";
import school from "../assets/school.png";
import github from "../assets/github.png";
import { useState } from "react";

function Projects() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <img className="self-center my-32 w-4/5" src={line} alt="" />

      <section className="mx-10 p-1 flex flex-col w-4/5 self-center">
        <h2 className="self-start text-secondary font-title text-3xl">
          Strony Internetowe
        </h2>

        <div className="mt-12 flex flex-col gap-24">
          <div
            onClick={() => setOpen1((prev) => !prev)}
            className="self-center mt-20 w-full  hover:scale-105 transition-transform"
          >
            <div className="flex relative">
              <h3 className="font-title text-xl text-white bg-secondary rounded-t-xl px-4 py-2 relative top-1">
                Pol - Med
              </h3>
              <HammerGif />
            </div>
            <div className="border-4 border-secondary rounded-b-xl rounded-tr-xl">
              <img
                className="rounded-b-lg rounded-tr-lg"
                src={pol_med}
                alt=""
              />
            </div>
            {open1 && (
              <p className="mt-10 font-description text-xl animate-fade-right">
                Strona internetowa dla firmy Pol-Med, która oferuje nowoczesne
                stacje edukacyjne dla branży samochodowej, oleje posmażalnicze
                UCO oraz szeroki wybór narzędzi przemysłowych. Projekt
                zrealizowany w Node.js zapewnia łatwą nawigację i dostęp do
                bogatej oferty firmy.
                <a
                  className="block mt-10 font-title text-lg py-4 px-8  w-fit text-secondary border-r-2 border-b-4
                   border-secondary border-opacity-25 rounded-full"
                  href="https://pol-med.tech"
                >
                  Kliknij aby przejść
                </a>
              </p>
            )}
          </div>

          <div
            onClick={() => setOpen2((prev) => !prev)}
            className="self-center mt-20 w-full  hover:scale-105 transition-transform"
          >
            <div className="flex relative">
              <h3 className="font-title text-xl text-white bg-div-krainaPsa rounded-t-xl px-4 py-2 relative top-1">
                Kraina Psa
              </h3>
              <img className="w-28 absolute -top-16 right-0" src={dog} alt="" />
            </div>
            <div className="border-4 border-div-krainaPsa rounded-b-xl rounded-tr-xl">
              <img
                className="rounded-b-lg rounded-tr-lg"
                src={kraina_psa}
                alt=""
              />
            </div>
            {open2 && (
              <p className="mt-10 font-description text-xl animate-fade-right">
                Strona internetowa dla salonu groomerskiego, umożliwiająca
                właścicielom zwierząt rezerwację wizyt na strzyżenie ich pupili.
                Stworzona w React i Tailwind CSS, strona oferuje szybkie i
                intuicyjne rezerwacje oraz nowoczesny design.
                <a
                  className="block mt-10 font-title text-lg py-4 px-8  w-fit text-div-krainaPsa border-r-2 border-b-4
                   border-div-krainaPsa border-opacity-25 rounded-full"
                  href="https://krainapsa.pl"
                >
                  Kliknij aby przejść
                </a>
              </p>
            )}
          </div>

          <div
            onClick={() => setOpen3((prev) => !prev)}
            className="self-center mt-20 w-full  hover:scale-105 transition-transform"
          >
            <div className="flex relative">
              <h3 className="font-title text-xl text-white bg-div-VIILiceum rounded-t-xl px-4 py-2 relative top-1">
                VII Liceum Bydgoszcz
              </h3>
              <img
                className="w-28 absolute -top-16 -right-1 rotate-6"
                src={liceum7}
                alt=""
              />
            </div>
            <div className="border-4 border-div-VIILiceum rounded-b-xl rounded-tr-xl">
              <img className="rounded-b-lg rounded-tr-lg" src={school} alt="" />
            </div>
            {open3 && (
              <p className="mt-10 font-description text-xl animate-fade-right">
                Oficjalna strona reprezentacyjna VII Liceum w Bydgoszczy.
                Wykonana przy użyciu React i Tailwind CSS, strona prezentuje
                informacje o szkole, wydarzeniach i osiągnięciach uczniów,
                jednocześnie zapewniając nowoczesny i atrakcyjny wygląd.
                <a
                  className="block mt-10 font-title text-lg py-4 px-8 w-fit text-div-VIILiceum border-r-2 border-b-4
                   border-div-VIILiceum border-opacity-25 rounded-full"
                  href="https://7lo.bydgoszcz.pl/"
                >
                  Kliknij aby przejść
                </a>
              </p>
            )}
          </div>

          <div className="mt-12">
            <a
              className="font-title text-xl text--secondary rounded-full w-fit py-4 h-auto bg-no-repeat 
              hover:scale-105 transition-transform border-4 border-x-secondary border-y-transparent flex
              items-center gap-4 px-8"
              href="https://github.com/KentoDecem"
              target="_blank"
            >
              <p className="max-w-36 text-center">Zobacz Inne projekty</p>
              <img className="w-12" src={github} alt="" />
            </a>
          </div>
        </div>
      </section>

      <img className="self-center my-32  w-4/5" src={line2} alt="" />
    </>
  );
}

export default Projects;
