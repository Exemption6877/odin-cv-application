function Languages() {
  // Need to use Form
  return (
    <div className="languages container">
      <label htmlFor="language">Language</label>
      <select name="language" id="language">
        <option value="english">English</option>
      </select>

      <select name="languageLevel" id="languageLevel">
        <option value="beginner">Beginner</option>
        <option value="elementary">Elementary</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="fluent">Fluent</option>
        <option value="native">Native</option>
      </select>
    </div>
  );
}

export default Languages;
