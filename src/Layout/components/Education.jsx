import "../../styles/Education.css";
import YearToYear from "../../components/YearToYear";
import IconButton from "../../components/IconButton";
import { useState } from "react";

function Education() {
  return (
    <div className="education container">
      <h2>Education</h2>
      <form>
        <label htmlFor="educationPlace">School/Name</label>
        <input type="text" id="educationPlace" name="educationPlace" />
        <label htmlFor="educationDescription">Description</label>
        <input
          type="text"
          id="educationDescription"
          name="educationDescription"
        />
        <YearToYear from={"startEduYear"} to={"endEduYear"} />
        <IconButton type="submit" name="education-submit" text="Submit" />
      </form>
    </div>
  );
}

export default Education;
