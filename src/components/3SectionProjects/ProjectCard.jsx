import { useState, useRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";
import Button from "../Shared/Button";

function ProjectCard({
  children,
  className,
  title,
  link,
  backgroundColor,
  secondBackgroundColor,
  icon,
  dots,
  thumbnail,
  paragraph,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);

  return (
    <div
      ref={ref}
      className={`self-center w-full relative flex flex-col animate-duration-1000 opacity-0 animate-ease-in-out ${
        isVisible ? "animate-fade-up" : ""
      } ${className}`}
      {...props}
    >
      <div
        className="hover:scale-105 transition-transform"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex relative">
          <h3
            className={`font-title text-xl font-medium text-white rounded-t-xl px-4 py-2 relative top-1 z-20`}
            style={{
              backgroundImage: `linear-gradient(-45deg, ${backgroundColor}, ${secondBackgroundColor})`,
            }}
          >
            {title}
          </h3>
          {icon}
          <img
            className="w-32 absolute -bottom-6 right-3  opacity-75 z-0"
            src={dots}
            alt=""
          />
        </div>
        <div
          className={`border-4 rounded-b-xl rounded-tr-xl relative z-10`}
          style={{ borderColor: secondBackgroundColor }}
        >
          <img className="rounded-b-md rounded-tr-lg" src={thumbnail} alt="" />
        </div>
      </div>

      {open && (
        <p className="mt-10 font-description text-xl animate-ease-out animate-duration-1000 animate-fade-right">
          {paragraph}
          <Button
            tag="a"
            className={`mt-10 to-zinc-500 text-base`}
            style={{
              backgroundImage: `linear-gradient(-45deg, ${backgroundColor}, ${secondBackgroundColor})`,
            }}
            href={link}
          >
            Kliknij aby przejść
          </Button>
        </p>
      )}
    </div>
  );
}

export default ProjectCard;
