import { useState } from "react";

function useSound() {
  const [soundEnabled, setSoundEnabled] = useState(
    () => localStorage.getItem("soundEnabled") || "off" // Wartość Domyślna
  );

  function toggleSound() {
    setSoundEnabled((prev) => {
      const newValue = prev === "on" ? "off" : "on";
      localStorage.setItem("soundEnabled", newValue);
      return newValue;
    });
  }

  function initialSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.addEventListener("canplaythrough", () => {
      audio.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    });
  }

  function playSound(soundFile) {
    if (soundEnabled === "on") {
      const audio = new Audio(soundFile);
      audio.addEventListener("canplaythrough", () => {
        audio.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
      });
    }
  }

  return { soundEnabled, toggleSound, playSound, initialSound };
}

export default useSound;
