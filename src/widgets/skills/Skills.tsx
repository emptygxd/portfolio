import { SkillsItem } from "entities";

import { SKILLS } from "shared";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex justify-center items-center flex-col mt-20 md:mt-10 sm:mt-7"
    >
      <h2 className="inline-block font-bold text-white text-center bg-primary-color px-5 py-3 mb-10 rounded-lg animate-fade-in sm:text-base">
        Навыки
      </h2>

      <div className="flex gap-6 flex-wrap justify-center items-center mb-10">
        {SKILLS.map((element, index) => (
          <SkillsItem
            key={`${element.name}_${index}`}
            name={element.name}
            image={element.img}
          />
        ))}
      </div>
    </section>
  );
};
