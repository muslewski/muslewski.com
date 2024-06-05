import Subtract from "../assets/Subtract.svg";

function Wrapper() {
  return (
    <>
      <img
        className="pointer-events-none select-none fixed top-2-99 left-3 h-28"
        src={Subtract}
        alt=""
      />
      <img
        className="pointer-events-none select-none fixed bottom-2-99 right-2 h-28 rotate-180"
        src={Subtract}
        alt=""
      />
      <div className="pointer-events-none select-none fixed z-50 left-0 w-3 h-screen bg-secondary"></div>
      <div className="pointer-events-none select-none fixed z-50 right-0 w-3 h-screen bg-secondary"></div>
      <div className="pointer-events-none select-none fixed z-50 top-0 w-screen h-3 bg-secondary"></div>
      <div className="pointer-events-none select-none fixed z-50 bottom-0 w-screen h-3 bg-secondary"></div>
    </>
  );
}

export default Wrapper;
