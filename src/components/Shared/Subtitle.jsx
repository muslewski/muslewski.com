import { useRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";

function Subtitle({ children, className, ...props }) {
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);

  return (
    <h2
      ref={ref}
      className={`font-title text-3xl font-medium text-secondary w-fit self-start animate-duration-[1500ms] animate-ease-out ${
        isVisible ? "animate-fade-right" : "opacity-0"
      } ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export default Subtitle;
