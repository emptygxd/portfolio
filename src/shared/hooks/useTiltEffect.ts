import { useState } from "react";

export const useTiltEffect = (maxRotation = 10, scale = 1.05) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    setStyle({
      transform: `rotateY(${x * maxRotation}deg) rotateX(${
        y * -maxRotation
      }deg) scale(${scale})`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateY(0deg) rotateX(0deg) scale(1)",
    });
  };

  return { style, handleMouseMove, handleMouseLeave };
};
