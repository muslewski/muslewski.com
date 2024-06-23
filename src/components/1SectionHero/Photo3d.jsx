import React, { useEffect, useRef } from "react";
import "./Photo3d.css";

function Photo3d({ fota }) {
  let bounds;
  const inputRef = useRef();
  const glowRef = useRef();
  const rotateToMouse = (e) => {
    bounds = inputRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;
    // console.log(center.y / 100);
    // glowRef.current.style.backgroundImage = `
    //   radial-gradient(
    //     circle at
    //     ${center.x * 2 + bounds.width / 2}px
    //     ${center.y * 2 + bounds.height / 2}px,
    //     #ffffff55,
    //     #0000000f
    //   )
    // `;

    // glowRef.current.style.backgroundImage = `
    //   radial-gradient(
    //     circle at
    //     ${center.x * 2 + bounds.width / 2}px
    //     ${center.y * 2 + bounds.height / 2}px,
    //     #ffffff55,
    //     #0000000f
    //   )
    // `;
  };
  const removeListener = (e) => {
    inputRef.current.style.transform = "";
    // inputRef.current.style.background = "";
  };
  useEffect(() => {});

  return (
    <div className="app hidden xl:flex">
      <div
        ref={inputRef}
        className="card"
        onMouseLeave={removeListener}
        onMouseMove={rotateToMouse}
        // style={{ backgroundImage: `url(${fota})` }}
      >
        <img src={fota} className="w-full h-full cardImage" alt="" />
        {/* <div ref={glowRef} className="glow" /> */}
      </div>
    </div>
  );
}

export default Photo3d;
