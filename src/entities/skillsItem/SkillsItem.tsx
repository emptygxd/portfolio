import { SKILLS_COLORS } from "shared";

import "./skillItem.css";

type Props = {
  name: string;
  image: string;
};

export const SkillsItem = ({ name, image }: Props) => {
  const colorClass =
    SKILLS_COLORS[name.toLowerCase() as keyof typeof SKILLS_COLORS].default;
  const hoverClass =
    SKILLS_COLORS[name.toLowerCase() as keyof typeof SKILLS_COLORS].hover;

  return (
    <div
      className={`skill__item w-52 h-52 rounded-lg border-2 border-solid flex flex-col justify-center items-center gap-5 transition hover:-translate-y-2 ${colorClass} ${hoverClass} sm:w-36 sm:h-36 sm:gap-3`}
    >
      <img
        src={image}
        alt={name.toLowerCase()}
        className={`w-32 h-32 ${name.toLowerCase()} sm:w-20 sm:h-20`}
      />
      <p className="text-white text-base">{name}</p>
    </div>
  );
};
