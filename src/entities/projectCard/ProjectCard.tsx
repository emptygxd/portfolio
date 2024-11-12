import "./projectCard.css";

type Props = {
  title: string;
  technologies: string[];
  imageUrl: string;
  link: string;
};

export const ProjectCard = ({ title, technologies, imageUrl, link }: Props) => {
  return (
    <div className="project__card relative flex p-6 w-2/3 -ml-10 text-white md:w-4/5">
      <img
        className="h-64 border-2 border-primary-color border-solid xl:h-44 lg:h-32"
        src={imageUrl}
        alt={`${title} preview`}
      />

      <div className="project__border flex flex-col justify-between w-full h-40 bg-background-color mt-4 -ml-0.5 px-8 pb-2 pt-8 border-primary-color border-solid border-2 border-l-0 xl:pt-4 xl:px-6 xl:h-28 xl:mt-4 lg:pt-2 lg:px-4 lg:h-20 lg:mt-3">
        <div className="flex flex-col gap-3 justify-center xl:gap-0">
          <h3 className="text-white text-xl uppercase lg:text-base">{title}</h3>

          <a
            className="text-link-color text-lg flex gap-2 w-fit hover:text-complementary-color lg:gap-1 lg:text-sm"
            href={link}
          >
            Посмотреть проект
            <span className="text-xl lg:text-base">↗</span>
          </a>
        </div>

        <div className="project__skills flex justify-end">
          <ul className="flex gap-5 lg:gap-4">
            {technologies.map((element, index) => (
              <li
                key={`${element}_${index}`}
                className="li__markers text-base lg:text-xs"
              >
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project__steps-big-top absolute border-t-2 border-r-2 border-l-2 border-primary-color bg-primary-color"></div>
      <div className="project__steps-small-top absolute border-t-2 border-r-2 border-primary-color bg-primary-color"></div>

      <div className="project__steps-big-bot absolute border-t-2 border-l-2 border-primary-color bg-background-color"></div>
      <div className="project__steps-small-bot absolute border-t-2 border-l-2 border-primary-color bg-background-color"></div>
    </div>
  );
};
