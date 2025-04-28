// import { useState } from "react";
import Title from "./components/Title";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Experience from "./components/Experience";

function Editor() {
  return (
    <div className="editor container">
      <Title />
      <Contact />
      <Summary />
      <Education />
      <Skills />
      <Languages />
      <Experience />
    </div>
  );
}

export default Editor;
