import { useRef, useState } from "react";

import type { SpringOptions } from "framer-motion";
import { motion, useMotionValue, useSpring } from "framer-motion";

import "./tiltedCard.css";

interface TiltedCardProps {
  containerHeight?: React.CSSProperties["height"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  overlayContent?: React.ReactNode;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export function TiltedCard({
  containerHeight = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  overlayContent = null,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative [perspective:800px] flex flex-col items-center justify-center "
      style={{
        height: containerHeight,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="card absolute top-0 left-0 text-lg z-[2] will-change-transform [transform:translateZ(30px)] [transform-style:preserve-3d] w-full h-full  bg-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.2)]) cursor-default text-white"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        {overlayContent}
      </motion.div>
    </figure>
  );
}
