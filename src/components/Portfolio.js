import { React, useEffect } from "react";
import Certification from "./portfolio/Certification";
import Intro from "./portfolio/Intro";
import Projects from "./portfolio/Projects";
import Skills from "./portfolio/Skills";
import Stack from "./portfolio/Stack";

function Portfolio() {
  useEffect(() => {
    document.title = "Jerald Dev - Portfolio";
  }, []);
  return (
    <>
      <Intro />
      <Stack />
      <Skills />
      <Projects />
      <Certification />
    </>
  );
}

export default Portfolio;
