import robotClick from "../assets/sounds/interface-robot-click.wav";
import buttonSound from "../assets/sounds/button3.mp3";
import buttonSound2 from "../assets/sounds/button4.mp3";
import buttonSound3 from "../assets/sounds/button5.mp3";
import buttonSound4 from "../assets/sounds/button6.mp3";
import buttonSound5 from "../assets/sounds/button7.mp3";

function Button({ children, playSound, ...props }) {
  return (
    <button
      className="bg-slate-300"
      onMouseUp={() => playSound && playSound(buttonSound4)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
