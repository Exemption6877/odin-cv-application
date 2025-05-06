import languagesData from "../../data/languages.json";
import IconButton from "../../components/Button";
import "../../styles/Languages.css";
import { useState } from "react";
import Alert from "../../components/alert";

function Languages() {
  const [entries, setEntries] = useState([
    {
      id: crypto.randomUUID(),
      language: "",
      level: "",
    },
  ]);
  const [isEditing, setIsEditing] = useState(
    entries.length > 0 ? entries[0].id : null
  );

  const [errors, setErrors] = useState([]);

  function handleTyping(e) {
    const { id, value } = e.target;
    const inputId = e.target.dataset.id;

    if (id === "language" || id === "level") setErrors([]);

    setEntries(
      entries.map((entry) =>
        entry.id === inputId ? { ...entry, [id]: value } : entry
      )
    );
  }

  function handleClick(e) {
    e.preventDefault();
    const { value, id } = e.currentTarget;
    let entryId;
    let newId;

    const currentErrors = [];
    const current = entries.find((entry) => entry.id === isEditing);

    if (current && current.language.length === 0) {
      currentErrors.push("Language is required.");
    }

    if (current && current.level.length === 0) {
      currentErrors.push("Proficiency level is required.");
    }

    if (currentErrors.length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors([]);

    switch (value) {
      case "submit":
        setErrors([]);
        setIsEditing(false);
        break;
      case "edit":
        entryId = id.replace("languages-edit-", "");
        setIsEditing(entryId);
        break;
      case "delete":
        entryId = id.replace("languages-delete-", "");
        setIsEditing(false);
        setEntries(entries.filter((entry) => entry.id !== entryId));
        break;
      case "add":
        newId = crypto.randomUUID();
        setEntries([
          ...entries,
          {
            id: newId,
            language: "",
            level: "",
          },
        ]);
        setIsEditing(newId);
        break;
    }
  }

  return (
    <div className="languages container">
      <h2>Languages</h2>
      {errors.length > 0 ? <Alert message={errors[0]} /> : null}
      {entries.length === 0 ? <p>No entries.</p> : null}

      {entries.map((entry) => (
        <div key={entry.id} className="language">
          {isEditing === entry.id ? (
            <form>
              <label htmlFor="language">Language</label>
              <select
                name="language"
                id="language"
                data-id={entry.id}
                value={entry.language}
                onChange={handleTyping}
              >
                <option value="" disabled hidden>
                  Language
                </option>
                {languagesData.languages.map((language) => (
                  <option key={language.name} value={language.name}>
                    {language.flag} {language.name}
                  </option>
                ))}
              </select>

              <label htmlFor="level">Level</label>
              <select
                name="level"
                id="level"
                data-id={entry.id}
                value={entry.level}
                onChange={handleTyping}
              >
                <option value="" disabled hidden>
                  Proficiency
                </option>
                <option value="●○○○○○">Beginner</option>
                <option value="●●○○○○">Elementary</option>
                <option value="●●●○○○">Intermediate</option>
                <option value="●●●●○○">Advanced</option>
                <option value="●●●●●○">Fluent</option>
                <option value="●●●●●●">Native</option>
              </select>

              <IconButton
                type="submit"
                name="languages-submit long-button"
                text="Submit"
                value="submit"
                onClick={handleClick}
              />
            </form>
          ) : (
            <>
              <ul>
                <li>
                  {entry.language} {entry.level}
                </li>
              </ul>
              <div className="button-wrapper">
                <IconButton
                  type="edit"
                  name="languages-edit small-button"
                  id={`languages-edit-${entry.id}`}
                  value="edit"
                  onClick={handleClick}
                />
                <IconButton
                  type="delete"
                  name="languages-delete small-button"
                  id={`languages-delete-${entry.id}`}
                  value="delete"
                  onClick={handleClick}
                />
              </div>
            </>
          )}
        </div>
      ))}

      {!isEditing ? (
        <IconButton
          type="add"
          name="languages-add long-button"
          text="Add new entry"
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
}

export default Languages;
