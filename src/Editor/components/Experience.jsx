import YearToYear from "./YearToYear";

function Experience() {
  return (
    <div className="experience container">
      <h2>Experience</h2>
      <label htmlFor="companyName">Company Name</label>
      <input type="text" id="companyName" name="companyName" />
      <label htmlFor="companyPosition">Position</label>
      <input type="text" id="companyPosition" name="companyPosition" />
      <YearToYear from={"startWorkYear"} to={"endWorkYear"} />
      <label htmlFor="descriptionWork">Description</label>
      <textarea name="descriptionWork" id="descriptionWork"></textarea>
    </div>
  );
}

export default Experience;
