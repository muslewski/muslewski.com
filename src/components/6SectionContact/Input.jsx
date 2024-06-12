import React from "react";

function Input({ sign, textarea, inputType, invalidText }) {
  let type = inputType || "text";
  const classStyling =
    "w-full p-2 mt-2 border-secondary/10 border-2 text-xl rounded-lg font-description";
  return (
    <label>
      <span className="font-title text-xl font-medium text-secondary">
        {sign}
      </span>
      {textarea ? (
        <textarea
          rows="4"
          className={classStyling}
          required
          onInvalid={(F) => F.target.setCustomValidity(invalidText)}
          onInput={(F) => F.target.setCustomValidity("")}
        />
      ) : (
        <input
          type={type}
          className={classStyling}
          required
          onInvalid={(F) => F.target.setCustomValidity(invalidText)}
          onInput={(F) => F.target.setCustomValidity("")}
        />
      )}
    </label>
  );
}

export default Input;
