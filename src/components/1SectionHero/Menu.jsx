import { useTranslation } from "react-i18next";
import { savedLanguage } from "../../helpers/i18n";

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
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import buttonArrow from "../../assets/buttonArrow.svg";
import { useState, useEffect, useRef } from "react";
import AnimatedHr from "./AnimatedHr";

function Menu({ setTheme, theme, hrLeft = "" }) {
  const [language, setLanguage] = useState(savedLanguage);
  const { t, i18n } = useTranslation();
  const [openSettings, setOpenSettings] = useState(null);
  const openSettingsRef = useRef();
  const openMenuRef = useRef();

  const [openMenu, setOpenMenu] = useState(null);

  // Latest status of openSettings.
  openSettingsRef.current = openSettings;
  openMenuRef.current = openMenu;

  // By default animation is hidden
  const [animationClass, setAnimationClass] = useState("xl:hidden 2xl:flex");
  const [menuAnimationClass, setMenuAnimationClass] =
    useState("hidden xl:flex");

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

  // Logic for animation of menu (Jump in / out)
  useEffect(() => {
    let timeout;

    if (openMenu === true) {
      setMenuAnimationClass("animate-jump-in xl:flex");
    } else if (openMenu === false) {
      setMenuAnimationClass("animate-jump-out xl:flex");
      // Make sure that we will not see jump out animation after it is already disabled
      timeout = setTimeout(() => {
        setMenuAnimationClass("hidden xl:flex");
      }, 1000);
    }

    // Clear timeout
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [openMenu]);

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
    if (openSettingsRef.current === true) {
      setOpenSettings(false);
    }
  };

  // Hide menu if visible
  const handleMenuClickOutside = () => {
    if (openMenuRef.current === true) {
      setOpenMenu(false);
    }
  };

  // Do nothing when clicked on children elements
  const handleMenuClick = (event) => {
    event.stopPropagation();
  };

  // Ref for setting button
  const refSettings = useOutsideClick(handleClickOutside);
  const refMenu = useOutsideClick(handleMenuClickOutside);

  function changeLanguage(lng) {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Zapisz wybór języka
  }

  return (
    <menu className=" flex flex-wrap xl:flex-nowrap justify-between mt-10 xl:mt-14 items-center mb-4 lg:mb-32  font-description text-secondary dark:text-white tracking-wide font-bold md:text-lg xl:text-2xl fixed w-9/12 lg:w-10/12 z-40">
      <li className="dark:bg-black/25 px-4 py-3 bg-white/25 xl:bg-transparent xl:dark:bg-transparent rounded-2xl hover:animate-jump animate-duration-500 animate-ease-in-out">
        <a href="#">
          <img src={theme === "dark" ? logoDark : logo} alt="" />
        </a>
      </li>

      <ul
        className={`${menuAnimationClass} flex absolute xl:relative  sm:justify-center self-center   justify-start items-start  flex-col sm:flex-row z-30 top-24 right-0 w-fit xl:top-0 flex-wrap xl:flex-nowrap gap-y-8 sm:gap-20 bg-white/90 dark:bg-secondary-dark/90 lg:py-3 py-12 sm:py-6 px-14 sm:px-7 mx-6 rounded-2xl shadow-md shadow-secondary/5`}
      >
        <AnimatedHr hrLeft={hrLeft} />

        <MenuItem
          href="#projekty"
          icon={theme === "dark" ? puzzleDark : puzzle}
          className="animate-delay-[50ms]"
        >
          {t("Projects")}
        </MenuItem>
        <MenuItem
          href="#technologie"
          icon={theme === "dark" ? toolDark : tool}
          className="animate-delay-[100ms]"
        >
          {t("Tools")}
        </MenuItem>
        <MenuItem
          href="#edukacja"
          icon={theme === "dark" ? graduationDark : graduation}
          className="animate-delay-[150ms]"
        >
          {t("Education")}
        </MenuItem>
        <li
          className="relative animate-fade-down animate-duration-500 "
          onClick={handleMenuClick}
        >
          <img
            src={theme === "dark" ? settingsIconDark : settingsIcon}
            className="h-11 hidden xl:flex 2xl:hidden cursor-pointer xl:animate-delay-[1000ms]"
            alt=""
            onClick={() => setOpenSettings((prev) => !prev)}
            ref={refSettings}
          />
          <ul
            className={`static xl:absolute 2xl:static flex-col sm:flex-row flex justify-between items-start gap-y-8 sm:gap-20 xl:gap-24 2xl:gap-20 p-0 2xl:p-0 2xl:shadow-transparent 2xl:bg-transparent 2xl:dark:bg-transparent -bottom-24 right-0
          xl:bg-white xl:dark:bg-secondary-dark xl:px-12 xl:py-3 rounded-2xl shadow-transparent xl:shadow-md xl:shadow-secondary/10 2xl:animate-jump  ${animationClass}`}
          >
            <MenuItem
              icon={theme === "dark" ? sun : moon}
              className="xl:animate-delay-[200ms]"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              {theme === "dark" ? t("Bright") : t("Dark")}
              {/* <img src={buttonArrow} className="h-2" alt="" /> */}
            </MenuItem>
            <MenuItem
              icon={theme === "dark" ? translationDark : translation}
              className="xl:animate-delay-[250ms]"
              onClick={() => changeLanguage(language === "pl" ? "en" : "pl")}
            >
              {t("TranslationButton")}
              {/* <img src={buttonArrow} className="h-2" alt="" /> */}
            </MenuItem>
          </ul>
        </li>
      </ul>
      <ul className="flex flex-row-reverse items-center gap-12">
        <MenuItem
          href="#kontakt"
          icon={hire}
          className="animate-delay-[300ms] hidden lg:flex text-2xl lg:text-white lg:bg-gradient-to-bl lg:from-secondary lg:to-[#273aa5] rounded-md hover:shadow-accent/30 hover:shadow-xl transition ease-in-out duration-500"
          classNameA="px-4 py-1 hover:py-2 hover:px-5  text-nowrap"
        >
          {t("Hire")}
        </MenuItem>
        <div ref={refMenu}>
          <MenuItem
            className="flex xl:hidden dark:bg-black/25 bg-white/25 xl:bg-transparent xl:dark:bg-transparent py-4 px-4 rounded-2xl hover:animate-jump animate-duration-500 animate-ease-in-out"
            onClick={() => {
              setOpenMenu((prev) => !prev);
            }}
          >
            {" "}
            <img src={theme === "dark" ? hamburgerDark : hamburger} alt="" />
          </MenuItem>
        </div>
      </ul>
    </menu>
  );
}

export default Menu;
