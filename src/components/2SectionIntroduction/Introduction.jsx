import "./Introduction.css";

import Lottie from "react-lottie";
import astronautJson from "../../lotties/astronaut.json";
import developerJson from "../../lotties/developer.json";
import Subtitle from "../Shared/Subtitle";
import Section from "../Shared/Section";
import Button from "../Shared/Button";

function Introduction() {
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
    <Section className="mt-24">
      <span className="self-start relative flex gap-0 items-center w-full font-title text-3xl">
        <Subtitle className="z-10 relative">Full Stack Developer</Subtitle>
        <div className="pointer-events-none max-w-12 max-h-12 relative -left-24 bottom-16 ">
          <Lottie options={astronaut} height={150} width={150} />
        </div>
      </span>
      <p className="font-description text-xl my-10 leading-normal">
        Uwielbiam tworzyć nowoczesne strony i aplikacje internetowe.
        <br />
        <b className="inline-block font-semibold my-3">
          Im trudniejszy projekt, tym lepiej!
        </b>
        <br />
        Chętnie zrealizuję Twój pomysł na imponującą stronę internetową, która
        zachwyci klientów.
      </p>

      <div className="self-start hover:scale-105 transition-transform flex flex-col cursor-pointer">
        <div className="-mb-7 pointer-events-none">
          <Lottie options={developer} height={180} width={180} />
        </div>

        <Button className="rounded-tr-lg rounded-bl-lg rounded-br-more rounded-tl-more">
          Więcej o mnie
        </Button>
      </div>
    </Section>
  );
}

export default Introduction;
