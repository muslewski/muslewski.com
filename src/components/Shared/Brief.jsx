import { useRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";

function Brief({ children, className, ...props }) {
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);

  return (
    <h3
      ref={ref}
      className={`font-description text-xl lg:text-2xl leading-normal font-medium text-secondary dark:text-white max-w-3xl w-fit self-start animate-duration-[1500ms] animate-ease-out ${
        isVisible ? "animate-fade-right" : "opacity-0"
      } ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export default Brief;
