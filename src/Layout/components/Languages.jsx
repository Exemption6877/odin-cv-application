import languagesData from "../../data/languages.json";
import IconButton from "../../components/IconButton";
import "../../styles/Languages.css";
import { useState } from "react";

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

  function handleTyping(e) {
    const inputId = e.currentTarget.dataset.id;
    const inputName = e.target.id;
    const value = e.target.value;

    setEntries(
      entries.map((entry) => {
        return entry.id === inputId ? { ...entry, [inputName]: value } : entry;
      })
    );
  }

  function handleClick(e) {
    e.preventDefault();
    const { value, id } = e.currentTarget;

    if (value === "submit") {
      const currentEntry = entries.find((entry) => entry.id === isEditing);

      currentEntry.language.length > 0 && currentEntry.level.length > 0
        ? setIsEditing(null)
        : console.log("Please choose both language and level");
    } else if (value === "delete") {
      const entryId = id.replace("languages-delete-", "");
      setIsEditing(null);
      setEntries(entries.filter((entry) => entry.id !== entryId));
    } else if (value === "add") {
      const newId = crypto.randomUUID();
      setEntries([
        ...entries,
        {
          id: newId,
          language: "",
          level: "",
        },
      ]);
      setIsEditing(newId);
    } else if (value === "edit") {
      const entryId = id.replace("languages-edit-", "");
      setIsEditing(entryId);
    }
  }

  return (
    <div className="languages container">
      <h2>Languages</h2>

      {entries.length === 0 ? <p>No entries.</p> : null}

      <ul>
        {entries.map((entry) => (
          <ul key={entry.id} className="language">
            {isEditing === entry.id ? (
              <form>
                <label htmlFor="language">Language</label>
                <select
                  name="language"
                  id="language"
                  data-id={entry.id}
                  onChange={handleTyping}
                >
                  <option value="" disabled selected hidden>
                    Please choose a language
                  </option>
                  {languagesData.languages.map((language) => (
                    <option key={language.name} value={language.name}>
                      {language.flag} {language.name}
                    </option>
                  ))}
                </select>

                <select
                  name="level"
                  id="level"
                  data-id={entry.id}
                  onChange={handleTyping}
                >
                  <option value="" disabled selected hidden>
                    level
                  </option>
                  <option value="beginner">Beginner</option>
                  <option value="elementary">Elementary</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="fluent">Fluent</option>
                  <option value="native">Native</option>
                </select>

                <IconButton
                  type="submit"
                  name="languages-submit"
                  text="Submit"
                  onClick={handleClick}
                />
              </form>
            ) : (
              <>
                <li>
                  {entry.language} — {entry.level}
                </li>
                <IconButton
                  type="edit"
                  name="languages-edit"
                  id={`languages-edit-${entry.id}`}
                  value="edit"
                  onClick={handleClick}
                />
                <IconButton
                  type="delete"
                  name="languages-delete"
                  id={`languages-delete-${entry.id}`}
                  value="delete"
                  onClick={handleClick}
                />
              </>
            )}
          </ul>
        ))}
      </ul>

      {isEditing === null ? (
        <IconButton
          type="add"
          name="languages-add"
          text="Add new entry"
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
}

export default Languages;
