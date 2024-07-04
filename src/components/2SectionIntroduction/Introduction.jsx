import "./Introduction.css";
import { useTranslation } from "react-i18next";

import Lottie from "react-lottie";
import astronautJson from "../../lotties/astronaut2.json";
import developerJson from "../../lotties/developer.json";
import Subtitle from "../Shared/Subtitle";
import Section from "../Shared/Section";
import Button from "../Shared/Button";
import GradientLine from "../Shared/GradientLine";

function Introduction() {
  const { t, i18n } = useTranslation();

  const astronaut = {
    loop: true,
    autoplay: true,
    animationData: astronautJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const developer = {
    loop: true,
    autoplay: true,
    animationData: developerJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Section
      className="self-start pt-12 flex flex-col lg:pt-0 max-w-7xl"
      id="wprowadzenie"
    >
      <span className="self-start relative flex gap-1 lg:gap-12 items-center w-full font-title text-3xl">
        <Subtitle className="z-10 relative -400 self-end flex flex-col lg:gap-2">
          <span className="font-description text-2xl lg:text-4xl">
            {t("As_a")}{" "}
          </span>
          Full Stack Developer
        </Subtitle>
        <div className="pointer-events-none w-64 relative top-8 sm:top-10">
          <Lottie options={astronaut} />
        </div>
      </span>
      <GradientLine />

      <p className="font-description text-secondary dark:text-blue-100 text-xl lg:text-2xl mb-10 leading-normal max-w-3xl self-start">
        {t("Ilove")}
        <br />
        <b className="inline-block font-semibold my-3">{t("HarderBetter")}</b>
        <br />
        <span className="lg:hidden">{t("ClientGain2")}</span>
        <span className="hidden lg:flex">{t("ClientGain")}</span>
      </p>

      <div className="self-start hover:scale-105 transition-transform flex flex-col cursor-pointer mt-6 lg:mt-12">
        <div className="-mb-7 pointer-events-none">
          <Lottie options={developer} height={180} width={180} />
        </div>

        <Button className="rounded-tr-lg rounded-bl-lg rounded-br-more rounded-tl-more">
          {t("MoreAboutMe")}
        </Button>
      </div>
    </Section>
  );
}

export default Introduction;
