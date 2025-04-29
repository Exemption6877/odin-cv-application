import YearToYear from "./YearToYear";

function Experience() {
  return (
    <div className="experience container">
      <h2>Experience</h2>
      <form>
        <div className="experience-row">
          <div className="left-column">
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" name="companyName" />
            <label htmlFor="companyPosition">Position</label>
            <input type="text" id="companyPosition" name="companyPosition" />
          </div>
          <div className="right-column">
            <YearToYear from={"startWorkYear"} to={"endWorkYear"} />
          </div>
        </div>

        <label htmlFor="descriptionWork">Description</label>
        <textarea name="descriptionWork" id="descriptionWork"></textarea>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Experience;
