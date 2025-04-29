function Education() {
  // Add ability to create additional entries
  // Add ability to create additional description
  return (
    <div className="education container">
      <h2>Education</h2>
      <label htmlFor="">First Year</label>
      <input type="number" id="firstYear" name="firstYear" />
      <label htmlFor="secondYear">Second Year</label>
      <input type="number" id="secondYear" name="secondYear" />
      <label htmlFor="educationPlace">School/Name</label>
      <input type="text" id="educationPlace" name="educationPlace" />
      <label htmlFor="educationDescription">Description</label>
      <input
        type="text"
        id="educationDescription"
        name="educationDescription"
      />
    </div>
  );
}

export default Education;
