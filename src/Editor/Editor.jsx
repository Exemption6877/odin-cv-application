// import { useState } from "react";
import Title from "./components/Title";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import YearToYear from "./components/YearToYear";

function Editor() {
  return (
    <div className="editor">
      <Title />
      <div className="main container">
        <div className="left container">
          <Contact />
          <Education />
          <Skills />
          <Languages />
          <YearToYear />
        </div>
        <div className="right container">
          <Summary />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Editor;
