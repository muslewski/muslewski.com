import Section from "../Shared/Section";
import behance from "../../assets/behance.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import x from "../../assets/x.svg";
import LinkCard from "./LinkCard";

function Footer() {
  return (
    <Section className="mt-32">
      <footer className="flex flex-col w-full font-description text-secondary text-xl text-center font-medium">
        <ul className="flex flex-col gap-16 w-full py-2 justify-start items-start text-left">
          <li>
            <a href="mailto:mateusz.mus@pm.me">
              <span className="border-2 p-2 mr-5 rounded-md border-secondary/10 shadow-secondary/10 shadow-md">
                Email
              </span>
              <span className="underline underline-offset-2">
                mateusz.mus@pm.me
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="border-2 p-2 mr-5 rounded-md border-secondary/10 shadow-secondary/10 shadow-md">
                Życiorys zawodowy
              </span>
              <span className="underline underline-offset-2">CV</span>
            </a>
          </li>
        </ul>

        <h4 className="border-2 mt-14 p-2 rounded-md w-fit border-secondary/10 shadow-secondary/10 shadow-md">
          Social Media
        </h4>

        <ul className="mt-10 flex gap-12 flex-wrap w-full justify-start text-white border-secondary border-l-2 pl-6">
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
