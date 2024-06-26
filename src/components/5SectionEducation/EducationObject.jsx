import React from "react";
import { useRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";

function EducationObject({ children, year, achievment, className }) {
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);
  return (
    <div
      className={`flex justify-center items-center gap-6 w-full ${className}`}
    >
      <h4
        ref={ref}
        className={`font-title font-medium text-2xl lg:text-4xl dark:text-slate-50 animate-duration-[3000ms] animate-ease-out ${
          isVisible ? "animate-fade-right" : "opacity-0"
        }`}
      >
        {year}
      </h4>
      <hr className="h-5 border-0 rounded-full w-8 relative z-10 bg-secondary dark:bg-blue-500" />
      <h3 className="w-full h-[3.65rem] lg:text-2xl flex items-center dark:text-stone-200">
        {achievment}
      </h3>
    </div>
  );
}

export default EducationObject;
