import { useRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";

function ToolCard({ title, logo, level, col1, col2, className }) {
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);

  let gradientLevel = ``;

  if (level === 0)
    gradientLevel = `linear-gradient(45deg, ${col1},${col1}, ${col2}, ${col2}, ${col2}, ${col2}, ${col2}, ${col2})`;
  else if (level === 1)
    gradientLevel = `linear-gradient(45deg, ${col1},${col1}, ${col1}, ${col2}, ${col2}, ${col2}, ${col2}, ${col2})`;
  else if (level === 2)
    gradientLevel = `linear-gradient(45deg, ${col1},${col1}, ${col1}, ${col2}, ${col2}, ${col2}, ${col2})`;
  else if (level === 3)
    gradientLevel = `linear-gradient(45deg, ${col1},${col1}, ${col1}, ${col2}, ${col2}, ${col2})`;
  else if (level === 4)
    gradientLevel = `linear-gradient(45deg, ${col1},${col1}, ${col1}, ${col1}, ${col2}, ${col2}, ${col2})`;
  else if (level === 5)
    gradientLevel = `linear-gradient(45deg, ${col1},${col1}, ${col1}, ${col1}, ${col2}, ${col2})`;

  return (
    <li
      ref={ref}
      className={`p-5 w-32 h-36 flex flex-col gap-2  justify-center items-center border-4 shadow-xl rounded-2xl 
        animate-ease-in-out animate-duration-[1600ms] duration-500 animate-fill-both   
        [&>img]:hover:scale-125 [&>img]:hover:bottom-2 relative hover:border-2 [&>span]:hover:opacity-50
        ${className} ${
        isVisible ? "animate-fade-up" : "opacity-0"
      } ${className}`}
      style={{ borderColor: col2 }}
    >
      <img
        className="h-10 object-contain lg:drop-shadow-xl bottom-0 left-0 relative transition-all duration-500"
        src={logo}
        alt=""
      />
      <span className=" transition-all duration-1000">{title}</span>
      <hr
        className={`h-2 w-full rounded-md border-0 shadow-inner animate-ease-in-out animate-once animate-duration-[1600ms] animate-delay-500 ${
          isVisible ? "animate-jump-in" : ""
        }`}
        style={{
          backgroundImage: gradientLevel,
        }}
      />
    </li>
  );
}

export default ToolCard;
