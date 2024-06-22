import "./Menu.css";
import logo from "../../assets/Logo.svg";
import logoDark from "../../assets/logoDark.svg";
import hamburger from "../../assets/Hamburger.svg";
import hamburgerDark from "../../assets/HamburgerDark.svg";
import MenuItem from "./MenuItem";

import settingsIcon from "../../assets/settingsIcon.svg";
import settingsIconDark from "../../assets/settingsIconDark.svg";
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
import { useState, useEffect, useRef } from "react";

function Menu({ setTheme, theme }) {
  const [openSettings, setOpenSettings] = useState(null);
  const openSettingsRef = useRef();

  // Latest status of openSettings.
  openSettingsRef.current = openSettings;

  // By default animation is hidden
  const [animationClass, setAnimationClass] = useState("xl:hidden 2xl:flex");

  // Logic for animation of settings (Jump in / out)
  useEffect(() => {
    let timeout;

    if (openSettings === true) {
      setAnimationClass("animate-jump-in  2xl:flex");
    } else if (openSettings === false) {
      setAnimationClass("animate-jump-out 2xl:flex");
      // Make sure that we will not see jump out animation after it is already disabled
      timeout = setTimeout(() => {
        setAnimationClass("xl:hidden 2xl:flex");
      }, 1000);
    }

    // Clear timeout
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [openSettings]);

  // Logic of hiding settings in multiple ways
  const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
      // Click Outside
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      // Escape
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          callback();
        }
      };

      // Scroll
      const handleScroll = () => {
        callback();
      };

      document.addEventListener("click", handleClick);
      document.addEventListener("keydown", handleKeyDown);
      window.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("scroll", handleScroll);
      };
    }, [ref]);

    return ref;
  };

  // Hide settings if visible
  const handleClickOutside = () => {
    if (openSettingsRef.current === true) setOpenSettings(false);
  };

  // Do nothing when clicked on children elements
  const handleMenuClick = (event) => {
    event.stopPropagation();
  };

  // Ref for setting button
  const refSettings = useOutsideClick(handleClickOutside);

  return (
    <menu className=" flex justify-between mt-10 xl:mt-14 items-center mb-4 lg:mb-32  font-description text-secondary dark:text-white tracking-wide font-bold md:text-lg xl:text-2xl fixed w-9/12 lg:w-10/12 z-40">
      <li className="animate-fade-down animate-duration-500 dark:bg-background/25 bg-white/25 xl:bg-transparent xl:dark:bg-transparent p-3 rounded-2xl">
        <a href="#">
          <img src={theme === "dark" ? logoDark : logo} alt="" />
        </a>
      </li>
      <ul className="hidden xl:flex gap-20 bg-white/90 dark:bg-secondary-dark/90 lg:py-3 lg:px-7 mx-6 lg:rounded-2xl shadow-md shadow-secondary/5">
        <div className="relative">
          <MenuItem
            href="#projekty"
            icon={theme === "dark" ? puzzleDark : puzzle}
            className="animate-delay-[50ms]"
          >
            Projekty
          </MenuItem>
          <hr className="absolute -bottom-1 w-1/2 h-1 rounded-full bg-secondary border-0" />
        </div>
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
        <li className="relative" onClick={handleMenuClick}>
          <img
            src={theme === "dark" ? settingsIconDark : settingsIcon}
            className="h-11 2xl:hidden cursor-pointer"
            alt=""
            onClick={() => setOpenSettings((prev) => !prev)}
            ref={refSettings}
          />
          <ul
            className={`absolute 2xl:static flex justify-between gap-24 2xl:gap-20 2xl:p-0 2xl:shadow-transparent 2xl:bg-transparent 2xl:dark:bg-transparent -bottom-24 right-0
           bg-white dark:bg-secondary-dark px-12 py-3 rounded-2xl shadow-md shadow-secondary/10 2xl:animate-jump xl:animate-duration-500 xl:animate-ease-in-out  ${animationClass}`}
          >
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
        </li>
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
