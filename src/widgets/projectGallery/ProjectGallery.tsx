import { useState, useEffect } from "react";

import { DesktopProjectList, MobileProjectSlider } from "features";

export const ProjectGallery = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col items-center mt-20 md:mt-10 sm:mt-7"
    >
      <h2 className="inline-block font-bold text-white text-center bg-primary-color px-5 py-3 mb-10 rounded-lg animate-fade-in sm:text-base sm:mb-5">
        Проекты
      </h2>
      {isMobile ? <MobileProjectSlider /> : <DesktopProjectList />}
    </section>
  );
};
