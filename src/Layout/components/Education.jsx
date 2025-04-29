import YearToYear from "../../Edit/components/YearToYear";

function Education() {
  // Add ability to create additional entries
  // Add ability to create additional description
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

        <input type="submit" />
      </form>
    </div>
  );
}

export default Education;
