import React, { useState } from "react";

function Input({ name, title, textarea, inputType, invalidText }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
    event.target.setCustomValidity("");
  }

  let type = inputType || "text";
  const classStyling =
    "w-full p-2 mt-2 border-secondary/10 border-2 text-xl rounded-lg font-description";

  return (
    <label>
      <span className="font-title text-xl font-medium text-secondary">
        {title}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows="4"
          className={classStyling}
          value={value}
          onChange={handleChange}
          required
          onInvalid={(e) => {
            e.target.setCustomValidity(invalidText);
          }}
        />
      ) : (
        <input
          name={name}
          type={type}
          className={classStyling}
          value={value}
          onChange={handleChange}
          required
          onInvalid={(e) => {
            e.target.setCustomValidity(invalidText);
          }}
        />
      )}
    </label>
  );
}

export default Input;
