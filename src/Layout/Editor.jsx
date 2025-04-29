// import { useState } from "react";
import Title from "./components/Title";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Drag from "../Edit/Drag";
import "./Editor.css";

function Editor() {
  return (
    <div className="editor">
      <div className="main container">
        <div className="left container">
          <Title />

          <Contact />
          <Education />
          <Skills />
          <Languages />
        </div>
        <div className="right container">
          <Summary />
          <Experience />
        </div>
      </div>
      <Drag />
    </div>
  );
}

export default Editor;
