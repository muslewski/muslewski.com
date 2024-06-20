import logo from "../../assets/Logo.svg";
import hamburger from "../../assets/Hamburger.svg";
import MenuItem from "./MenuItem";

import hire from "../../assets/hire.svg";
import puzzle from "../../assets/puzzle.svg";
import tool from "../../assets/tool.svg";
import graduation from "../../assets/graduation.svg";
import translation from "../../assets/translation.svg";
import moon from "../../assets/moon.svg";
import buttonArrow from "../../assets/buttonArrow.svg";

function Menu() {
  return (
    <menu className="flex justify-between mt-10 xl:mt-14 items-center mb-4 lg:mb-32 w-full font-description text-secondary tracking-wide font-bold md:text-lg xl:text-2xl lg:absolute">
      <li className="animate-fade-down animate-duration-500 lg:hidden xl:flex">
        <img src={logo} alt="" />
      </li>

      <MenuItem
        href="#projekty"
        icon={puzzle}
        className="hidden animate-delay-[50ms]"
      >
        Projekty
      </MenuItem>
      <MenuItem
        href="#technologie"
        icon={tool}
        className="hidden animate-delay-[100ms]"
      >
        Technologie
      </MenuItem>
      <MenuItem
        href="#edukacja"
        icon={graduation}
        className=" hidden animate-delay-[150ms]"
      >
        Edukacja
      </MenuItem>

      <MenuItem icon={translation} className="hidden animate-delay-[200ms]">
        PL
        <img src={buttonArrow} className="h-2" alt="" />
      </MenuItem>
      <MenuItem icon={moon} className="hidden animate-delay-[250ms]">
        Ciemny
        <img src={buttonArrow} className="h-2" alt="" />
      </MenuItem>
      <MenuItem
        href="#kontakt"
        icon={hire}
        className="animate-delay-[300ms] flex text-2xl lg:text-white lg:bg-gradient-to-bl lg:from-secondary lg:to-[#273aa5] rounded-md"
        classNameA="px-4 py-1"
      >
        Zatrudnij
      </MenuItem>
    </menu>
  );
}

export default Menu;
