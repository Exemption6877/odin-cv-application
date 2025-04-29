function Title() {
  return (
    <div className="title container">
      <h2>Title</h2>
      <form>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" />
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Title;
