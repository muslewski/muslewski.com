import React, { useState, useEffect, forwardRef } from "react";
import { useRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";

const Input = forwardRef(
  ({ name, title, textarea, inputType, errorText, send }, ref) => {
    const [value, setValue] = useState("");
    const refVisibility = useRef();
    const isVisible = useIsVisible(refVisibility, true);

    useEffect(() => {
      setValue("");
    }, [send]);

    function handleChange(event) {
      setValue(event.target.value);
      event.target.setCustomValidity("");
    }

    let type = inputType || "text";
    const classStyling =
      "w-full p-2 my-2 border-secondary/10 border-2 text-xl rounded-lg font-description outline-blue-600";

    return (
      <label
        ref={refVisibility}
        className={`animate-ease-in-out animate-duration-[1600ms] opacity-0 ${
          isVisible ? "animate-fade-up" : ""
        }`}
      >
        <span className="font-title text-xl font-medium text-secondary">
          {title}
        </span>
        {textarea ? (
          <textarea
            ref={ref}
            name={name}
            rows="4"
            className={classStyling}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <input
            ref={ref}
            name={name}
            type="text"
            className={classStyling}
            value={value}
            onChange={handleChange}
          />
        )}

        {errorText.length > 0 && (
          <span className="font-description text-xl font-medium text-blue-900">
            {errorText}
          </span>
        )}
      </label>
    );
  }
);

export default Input;
