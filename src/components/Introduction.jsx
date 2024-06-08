import developmentGif from "../assets/development.gif";

import Lottie from "react-lottie";
import astronautJson from "../lotties/astronaut.json";
import developerJson from "../lotties/developer.json";

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
    <section className="mx-10 p-1 flex flex-col w-4/5 self-center">
      <h2 className="self-start flex flex-col-reverse justify-center gap-0 items-center w-full font-title text-3xl mt-24">
        <span className=" text-secondary relative z-20 max-w-[50%] self-start">
          Full Stack Developer
        </span>
        <div className="self-end absolute z-10 mb-9 pointer-events-none">
          <Lottie options={astronaut} height={150} width={150} />
        </div>
      </h2>
      <p className="font-description text-xl my-10 leading-normal">
        Uwielbiam tworzyć nowoczesne strony i aplikacje internetowe.
        <br />
        <b className="inline-block font-semibold my-3">
          Im trudniejszy projekt, tym lepiej!
        </b>
        <br />
        Współpracując ze mną, zyskasz technicznego eksperta i partnera, który z
        pasją przekształca Twoje pomysły w rzeczywistość.
      </p>

      <div className="self-start -mb-7 ml-5">
        <Lottie options={developer} height={180} width={180} />
      </div>

      <button
        className="font-title text-xl text-white bg-secondary rounded-full w-56 p-4 h-auto 
  bg-no-repeat hover:scale-105 transition-transform"
      >
        Więcej o mnie
      </button>
    </section>
  );
}

export default Introduction;
