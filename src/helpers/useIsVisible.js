import { useEffect, useState } from "react";

export function useIsVisible(ref, animateOnce = true) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (animateOnce) {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect(); // Rozłączamy obserwator, aby uniknąć dalszych zdarzeń
        }
      } else {
        setIntersecting(entry.isIntersecting);
      }
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, animateOnce]);

  return isIntersecting;
}
