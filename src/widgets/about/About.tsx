import { AboutItem } from "entities";

import { ABOUT_TEXT } from "shared";

export const About = () => {
  return (
    <section id="about" className="p-10">
      <div className="flex justify-center items-center flex-col">
        <h2 className="inline-block font-bold text-white text-center bg-primary-color px-5 py-3 mb-10 rounded-lg animate-fade-in sm:text-base">
          Обо мне
        </h2>

        <div className="card__container flex flex-wrap justify-center gap-10  xl:gap-6 sm:flex-col">
          {/* card__container */}
          {ABOUT_TEXT.map((element, index) => (
            <AboutItem key={`${element.text}_${index}`} text={element.text} />
          ))}
        </div>
      </div>
    </section>
  );
};
