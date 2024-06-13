import React, { useState, useEffect, forwardRef } from "react";

const Input = forwardRef(
  ({ name, title, textarea, inputType, errorText, send }, ref) => {
    const [value, setValue] = useState("");

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
      <label>
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
