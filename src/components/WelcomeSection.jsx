import React from "react";
import logo from "../assets/Logo.svg";
import hamburger from "../assets/Hamburger.svg";
import fota from "../assets/fota.png";
import arrow from "../assets/Arrow.svg";

function WelcomeSection() {
  return (
    <section className="mx-10 p-1 flex flex-col items-center">
      <menu className="flex  mt-10 mb-4 w-full">
        <li>
          <img src={logo} alt="" />
        </li>
        <li>
          <img className="fixed right-11" src={hamburger} alt="" />
        </li>
      </menu>
      <img className="h-80" src={fota} alt="" />
      <h1 className="font-title text-secondary text-4xl text-center mt-8 leading-normal">
        Cześć, jestem <b className="font-medium">Mateusz</b>.
      </h1>

      <img className="mt-11 animate-pulse" src={arrow} alt="" />
    </section>
  );
}

export default WelcomeSection;
