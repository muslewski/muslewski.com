import { useRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";

function Subtitle({ children, className, ...props }) {
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);

  return (
    <h2
      ref={ref}
      className={`font-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:leading-normal font-medium text-secondary dark:text-white  self-start animate-duration-[1500ms] animate-ease-out ${
        isVisible ? "animate-fade-right" : "opacity-0"
      } ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export default Subtitle;
