import "./Wrapper.css";

import Subtract from "../../assets/Subtract.svg";

function Wrapper() {
  return (
    <>
      <img
        className="pointer-events-none select-none fixed z-50 top-2-99 left-3 h-28 animate-fade-top-left"
        src={Subtract}
        alt=""
      />
      <img
        className="pointer-events-none select-none fixed z-50 bottom-2-99 right-2 h-28 animate-fade-bottom-right"
        src={Subtract}
        alt=""
      />
      <div className="pointer-events-none select-none fixed z-50 left-0 w-3 h-screen bg-secondary animate-fade-right animate-ease-in-out"></div>
      <div className="pointer-events-none select-none fixed z-50 right-0 w-3 h-screen bg-secondary animate-fade-left animate-ease-in-out"></div>
      <div className="pointer-events-none select-none fixed z-50 top-0 w-screen h-3 bg-secondary animate-fade-down animate-ease-in-out"></div>
      <div className="pointer-events-none select-none fixed z-50 bottom-0 w-screen h-3 bg-secondary animate-fade-up animate-ease-in-out"></div>
    </>
  );
}

export default Wrapper;
