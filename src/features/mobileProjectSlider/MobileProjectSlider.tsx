import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { ProjectCard } from "entities";

import { LAYOUT_PROJECTS, REACT_PROJECTS } from "shared";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./mobileProjectSlider.css";

export const MobileProjectSlider = () => {
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
    loop: true,
    modules: [Pagination, Navigation],
  };

  const projects = [...LAYOUT_PROJECTS, ...REACT_PROJECTS];

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <Swiper {...swiperSettings}>
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ProjectCard
              title={project.title}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
