function Experience() {
  return (
    <div className="experience container">
      <h2>Experience</h2>
      <label htmlFor="companyName">Company Name</label>
      <input type="text" id="companyName" name="companyName" />
      <label htmlFor="companyPosition">Position</label>
      <input type="text" id="companyPosition" name="companyPosition" />
      <label htmlFor="">First Year</label>
      <input type="number" id="firstYearWork" name="firstYearWork" />
      <label htmlFor="secondYear">Second Year</label>
      <input type="number" id="secondYearWork" name="secondYearWork" />
      <label htmlFor="descriptionWork">Description</label>
      <textarea name="descriptionWork" id="descriptionWork"></textarea>
    </div>
  );
}

export default Experience;
