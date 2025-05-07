import Title from "./components/Title";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import "../styles/Editor.css";

function Editor() {
  return (
    <div className="editor">
      <Title />
      <div className="main">
        <div className="left column">
          <Contact />
          <Education />
          <Skills />
          <Languages />
        </div>
        <div className="right column">
          <Summary />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Editor;
