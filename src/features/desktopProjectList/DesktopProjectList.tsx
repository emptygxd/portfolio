import { useState } from "react";

import { ProjectCard } from "entities";

import { LAYOUT_PROJECTS, REACT_PROJECTS, Project } from "shared";

export const DesktopProjectList = () => {
  const [activeCategory, setActiveCategory] = useState<"LAYOUT" | "REACT">(
    "LAYOUT",
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedProjects, setDisplayedProjects] =
    useState<Project[]>(LAYOUT_PROJECTS);

  const handleCategoryChange = (category: "LAYOUT" | "REACT") => {
    if (category !== activeCategory) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveCategory(category);
        setDisplayedProjects(
          category === "LAYOUT" ? LAYOUT_PROJECTS : REACT_PROJECTS,
        );
        setIsAnimating(false);
      }, 350);
    }
  };

  return (
    <>
      <div className="flex gap-10 mb-16 mt-5 lg:mb-8">
        <button
          className={`border-link-color border-2 rounded-lg text-xl text-color p-2 transition-all duration-150 ${
            activeCategory === "LAYOUT"
              ? "project__button-active bg-complementary-color"
              : "hover:bg-complementary-color hover:border-complementary-color"
          }`}
          onClick={() => handleCategoryChange("LAYOUT")}
        >
          Верстка
        </button>

        <button
          className={`border-link-color border-2 rounded-lg text-xl text-color p-2 transition-all duration-150 ${
            activeCategory === "REACT"
              ? "project__button-active bg-complementary-color"
              : "hover:bg-complementary-color hover:border-complementary-color"
          }`}
          onClick={() => handleCategoryChange("REACT")}
        >
          JS/React
        </button>
      </div>

      <div
        className={`w-full flex justify-center items-center flex-col overflow-y-hidden transition-transform duration-500 ${
          isAnimating
            ? activeCategory === "LAYOUT"
              ? "animate-slide-out-left"
              : "animate-slide-out-right"
            : activeCategory === "LAYOUT"
              ? "animate-slide-in-left"
              : "animate-slide-in-right"
        }`}
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
};
