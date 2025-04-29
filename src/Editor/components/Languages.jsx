import languagesData from "../../data/languages.json";

function Languages() {
  return (
    <div className="languages container">
      <h2>Languages</h2>
      <form>
        <label htmlFor="language">Language</label>
        <select name="language" id="language">
          {languagesData.languages.map((language) => (
            <option key={language.name} value={language.name}>
              {language.flag} {language.name}
            </option>
          ))}
        </select>

        <select name="languageLevel" id="languageLevel">
          <option value="beginner">Beginner</option>
          <option value="elementary">Elementary</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="fluent">Fluent</option>
          <option value="native">Native</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Languages;
