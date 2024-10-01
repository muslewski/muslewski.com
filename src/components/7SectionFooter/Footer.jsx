import { useTranslation } from "react-i18next";
import Section from "../Shared/Section";
import behance from "../../assets/behance.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import x from "../../assets/x.svg";
import LinkCard from "./LinkCard";
import GradientLine from "../Shared/GradientLine";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <Section className="pt-32 lg:pt-52 justify-start max-w-7xl">
      <footer className="flex flex-col w-full font-description text-secondary dark:text-white text-xl lg:text-2xl text-center font-medium">
        <ul className="mb-10 flex flex-col gap-16 w-full py-2 justify-start items-start text-left">
          <li>
            <a href="mailto:kontakt@muslewski.com">
              <span className="border-b-2 p-2 mr-5 rounded-md border-secondary/25 shadow-secondary/10 shadow-md">
                {t("Email")}
              </span>
              <span className="underline underline-offset-2">
                kontakt@muslewski.com
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="border-b-2 p-2 mr-5 rounded-md border-secondary/25 shadow-secondary/10 shadow-md">
                {t("Resume")}
              </span>
              <span className="underline underline-offset-2">
                {t("Download")}
              </span>
            </a>
          </li>
        </ul>

        <GradientLine />

        <ul className="mt-10 flex gap-12 flex-wrap w-full justify-start text-white pl-2">
          <LinkCard
            text="GitHub"
            logo={github}
            href="https://github.com/muslewski"
            color1="#271c2d"
            color2="#626a734c"
          />

          <LinkCard
            text="LinkedIn"
            logo={linkedin}
            href="https://www.linkedin.com/in/muslewski/"
            color1="#064664"
            color2="#2b7ba06c"
          />
          <LinkCard
            text="Behance"
            logo={behance}
            href="https://www.behance.net/muslewski"
            color1="#002262"
            color2="#0f42a25e"
          />
          <LinkCard
            text="X / Twitter"
            logo={x}
            href="https://x.com/Muslewski_M"
            color1="#0b1031"
            color2="#6464645e"
          />
        </ul>
      </footer>
    </Section>
  );
}

export default Footer;
