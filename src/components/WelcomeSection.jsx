import React from "react";
import logo from "../assets/Logo.svg";
import hamburger from "../assets/Hamburger.svg";
import fota from "../assets/fota.png";
import fotaRaw from "../assets/fota_raw.jpg";
import person from "../assets/person.png";
import arrow from "../assets/Arrow.svg";

function WelcomeSection() {
  return (
    <section className="mx-10 p-1 flex flex-col items-center w-4/5 self-center">
      <menu className="flex justify-between mt-10 mb-4 w-full">
        <li>
          <img src={logo} alt="" />
        </li>
        <li>
          {/* <img className="fixed right-11" src={hamburger} alt="" /> */}
          <a
            className="font-description text-2xl 
            font-bold text-secondary tracking-wide"
            href=""
          >
            Zatrudnij
          </a>
        </li>
      </menu>
      <img className="h-80" src={fota} alt="" />
      {/* <img src={person} className="h-80 person-img blob-border-radius" /> */}

      <h1 className="font-title text-secondary text-4xl text-center mt-8 leading-normal">
        Cześć, jestem <b className="font-medium">Mateusz</b>.
      </h1>

      <img
        className="mt-11 animate-pulse hover:scale-110 transition-transform"
        src={arrow}
        alt=""
      />
    </section>
  );
}

export default WelcomeSection;
