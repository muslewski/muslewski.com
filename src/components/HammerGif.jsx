import React, { useEffect, useRef } from "react";
import hammer from "../assets/hammer.gif";

const HammerGif = () => {
  const hammerRef = useRef(null);

  useEffect(() => {
    const hammer = hammerRef.current;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hammer.src = hammer.src; // Restart the GIF animation
          observer.disconnect(); // Stop observing after the first intersection
        }
      });
    });

    if (hammer) {
      observer.observe(hammer);
    }

    // Cleanup observer on component unmount
    return () => {
      if (hammer) {
        observer.unobserve(hammer);
      }
    };
  }, []);

  return (
    <img
      ref={hammerRef}
      className="w-56 absolute -top-20 right-0"
      src={hammer}
      alt="Hammer"
    />
  );
};

export default HammerGif;
