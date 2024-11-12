import { About, Footer, ProjectGallery, Skills } from "widgets";

import { Menu } from "features";

import { Resume } from "entities";

import "./App.css";

export const App = () => {
  return (
    <>
      <Menu />

      <main className="overflow-x-hidden">
        <Resume />

        <About />

        <Skills />

        <ProjectGallery />
      </main>

      <Footer />
    </>
  );
};
