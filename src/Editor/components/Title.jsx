function Title() {
  return (
    <div className="title container">
      <label htmlFor="fullName">Full Name:</label>
      <input type="text" id="fullName" name="fullName" />
      <label htmlFor="position">Position:</label>
      <input type="text" id="position" name="position" />
    </div>
  );
}

export default Title;
