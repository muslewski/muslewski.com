import { useState } from "react";
import Button from "../Shared/Button";
import connector from "../../assets/connector4.svg";

function ProjectCard({
  children,
  className,
  title,
  backgroundColor,
  secondBackgroundColor,
  icon,
  thumbnail,
  paragraph,
  ...props
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`self-center w-full relative flex flex-col ${className}`}
      {...props}
    >
      <div
        className="hover:scale-105 transition-transform"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex relative">
          <h3
            className={`font-title text-xl font-medium text-white rounded-t-xl px-4 py-2 relative top-1`}
            style={{
              backgroundImage: `linear-gradient(-45deg, ${backgroundColor}, ${secondBackgroundColor})`,
            }}
          >
            {title}
          </h3>
          {icon}
        </div>
        <div
          className={`border-4 rounded-b-xl rounded-tr-xl`}
          style={{ borderColor: secondBackgroundColor }}
        >
          <img className="rounded-b-md rounded-tr-lg" src={thumbnail} alt="" />
        </div>
      </div>

      {open && (
        <p className="mt-10 font-description text-xl animate-fade-right">
          {paragraph}
          <Button
            tag="a"
            className={`mt-10 to-zinc-500 text-base`}
            style={{
              backgroundImage: `linear-gradient(-45deg, ${backgroundColor}, ${secondBackgroundColor})`,
            }}
            href="https://krainapsa.pl"
          >
            Kliknij aby przejść
          </Button>
        </p>
      )}
    </div>
  );
}

export default ProjectCard;
