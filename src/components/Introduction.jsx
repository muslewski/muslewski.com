import developmentGif from "../assets/development.gif";

function Introduction() {
  return (
    <section className="mx-10 p-1 flex flex-col w-3/4 self-center">
      <h2 className="self-start flex justify-center gap-0 items-center font-title text-3xl mt-24">
        <span className="max-w-52 text-secondary">Full Stack Developer</span>
        <img className="max-h-28 object-contain" src={developmentGif} alt="" />
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

      <button
        className="font-title text-xl text-white bg-secondary rounded-full bg-contain bg-center w-56 p-4 h-auto 
  bg-no-repeat hover:scale-105 transition-transform"
      >
        Więcej o mnie
      </button>
    </section>
  );
}

export default Introduction;
