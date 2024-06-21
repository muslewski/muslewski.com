import logo from "../../assets/Logo.svg";
import logoDark from "../../assets/logoDark.svg";
import hamburger from "../../assets/Hamburger.svg";
import hamburgerDark from "../../assets/HamburgerDark.svg";
import MenuItem from "./MenuItem";

import hire from "../../assets/hire.svg";
import puzzle from "../../assets/puzzle.svg";
import puzzleDark from "../../assets/puzzleDark.svg";
import tool from "../../assets/tool.svg";
import toolDark from "../../assets/toolDark.svg";
import graduation from "../../assets/graduation.svg";
import graduationDark from "../../assets/graduationDark.svg";
import translation from "../../assets/translation.svg";
import translationDark from "../../assets/translationDark.svg";
import moon from "../../assets/Moon.svg";
import sun from "../../assets/sun.svg";
import buttonArrow from "../../assets/buttonArrow.svg";

function Menu({ setTheme, theme }) {
  return (
    <menu className=" flex justify-between mt-10 xl:mt-14 items-center mb-4 lg:mb-32  font-description text-secondary dark:text-white tracking-wide font-bold md:text-lg xl:text-2xl fixed w-9/12 lg:w-10/12 z-40">
      <li className="animate-fade-down animate-duration-500 dark:bg-background/25 bg-white/25 xl:bg-transparent xl:dark:bg-transparent p-3 rounded-2xl">
        <a href="#">
          <img src={theme === "dark" ? logoDark : logo} alt="" />
        </a>
      </li>
      <ul className="hidden xl:flex gap-20 bg-white/90 dark:bg-secondary-dark/90 lg:py-3 lg:px-7 mx-6 lg:rounded-2xl shadow-md shadow-secondary/5">
        <MenuItem
          href="#projekty"
          icon={theme === "dark" ? puzzleDark : puzzle}
          className="animate-delay-[50ms]"
        >
          Projekty
        </MenuItem>
        <MenuItem
          href="#technologie"
          icon={theme === "dark" ? toolDark : tool}
          className="animate-delay-[100ms]"
        >
          Technologie
        </MenuItem>
        <MenuItem
          href="#edukacja"
          icon={theme === "dark" ? graduationDark : graduation}
          className="animate-delay-[150ms]"
        >
          Edukacja
        </MenuItem>
        <MenuItem
          icon={theme === "dark" ? moon : sun}
          className="animate-delay-[250ms]"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? "Ciemny" : "Jasny"}
          {/* <img src={buttonArrow} className="h-2" alt="" /> */}
        </MenuItem>
        <MenuItem
          icon={theme === "dark" ? translationDark : translation}
          className="animate-delay-[200ms]"
        >
          PL
          {/* <img src={buttonArrow} className="h-2" alt="" /> */}
        </MenuItem>
      </ul>
      <MenuItem
        href="#kontakt"
        icon={hire}
        className="animate-delay-[300ms] hidden lg:flex text-2xl lg:text-white lg:bg-gradient-to-bl lg:from-secondary lg:to-[#273aa5] rounded-md"
        classNameA="px-4 py-1 hover:py-2 hover:px-5"
      >
        Zatrudnij
      </MenuItem>
      <MenuItem
        className="flex lg:hidden dark:bg-background/25 bg-white/25 xl:bg-transparent xl:dark:bg-transparent py-6 px-4 rounded-2xl "
        onClick={() => {
          console.log("click");
        }}
      >
        {" "}
        <img src={theme === "dark" ? hamburgerDark : hamburger} alt="" />
      </MenuItem>
    </menu>
  );
}

export default Menu;
