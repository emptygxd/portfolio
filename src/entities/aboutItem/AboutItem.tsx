import { useEffect, useState } from "react";

import { useTiltEffect } from "shared";

import "./aboutItem.css";

type Props = {
  text: string;
};

export const AboutItem = ({ text }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { style, handleMouseMove, handleMouseLeave } = useTiltEffect(10, 1.05);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsLoaded(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`card h-32 ${isLoaded ? "animate-bounce-in " : ""} lg:h-28`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <p className="text-color text-lg lg:text-sm md:text-xs sm:text-center">
        {text}
      </p>
    </div>
  );
};
