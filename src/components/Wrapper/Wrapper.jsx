import "./Wrapper.css";

import Subtract from "../../assets/Subtract.svg";

function Wrapper({ primaryColor }) {
  return (
    <>
      <img
        className="pointer-events-none select-none fixed z-50 top-[0.73rem] xl:top-[1.46rem] left-3 xl:left-[1.46rem] h-28 animate-fade-top-left"
        src={Subtract}
        alt=""
      />
      <img
        className="pointer-events-none select-none fixed z-50 bottom-[0.73rem] xl:bottom-[1.46rem] right-2 xl:right-[1.46rem] h-28 animate-fade-bottom-right"
        src={Subtract}
        alt=""
      />
      <div className="pointer-events-none select-none fixed z-50 left-0 w-3 xl:w-6 h-screen bg-secondary animate-fade-right animate-ease-in-out "></div>
      <div className="pointer-events-none select-none fixed z-50 right-0 w-3 xl:w-6 h-screen bg-secondary animate-fade-left animate-ease-in-out "></div>
      <div className="pointer-events-none select-none fixed z-50 top-0 w-screen h-3 xl:h-6 bg-secondary animate-fade-down animate-ease-in-out "></div>
      <div className="pointer-events-none select-none fixed z-50 bottom-0 w-screen h-3 xl:h-6 bg-secondary animate-fade-up animate-ease-in-out "></div>
    </>
  );
}

export default Wrapper;
