import { useEffect, useState } from "react";

function AnimatedHr({ hrLeft }) {
  const [hrClass, setHrClass] = useState("");

  useEffect(() => {
    const initialHrClass =
      "absolute -bottom-1 h-1 rounded-full bg-gradient-to-br from-secondary/50 to-accent/75 border-0 animate-duration-[300ms] ";
    setHrClass(initialHrClass + hrLeft);

    let timeout;

    if (hrLeft.includes("out")) {
      timeout = setTimeout(() => {
        setHrClass((prev) => prev + " hidden");
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [hrLeft]);

  console.log(hrClass);

  return <hr key={hrClass} className={hrClass} />;
}

export default AnimatedHr;
