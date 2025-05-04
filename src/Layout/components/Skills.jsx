import IconButton from "../../components/IconButton";
import { useState } from "react";
import "../../styles/Skills.css";

function Skills() {
  const [entries, setEntries] = useState([
    {
      id: crypto.randomUUID(),
      skill: "",
    },
  ]);
  const [isEditing, setIsEditing] = useState(
    entries.length > 0 ? entries[0].id : null
  );

  function handleTyping(e) {
    const inputId = e.currentTarget.dataset.id;
    const value = e.target.value;

    setEntries(
      entries.map((entry) => {
        return entry.id === inputId ? { ...entry, skill: value } : entry;
      })
    );
  }

  function handleClick(e) {
    e.preventDefault();
    const { value, id } = e.currentTarget;

    if (value === "submit") {
      setIsEditing(null);
    } else if (value === "delete") {
      const entryId = id.replace("skills-delete-", "");
      setIsEditing(null);
      setEntries(entries.filter((entry) => entry.id !== entryId));
    } else if (value === "add") {
      const newId = crypto.randomUUID();
      setEntries([
        ...entries,
        {
          id: newId,
          skills: "",
        },
      ]);
      setIsEditing(newId);
    } else if (value === "edit") {
      const entryId = id.replace("skills-edit-", "");
      setIsEditing(entryId);
    }
  }
  return (
    <div className="skills container">
      <ul>
        {entries.length === 0 ? <p>No entries.</p> : null}
        {entries.map((entry) => (
          <li key={entry.id} className="skill">
            {isEditing === entry.id ? (
              <form>
                <label htmlFor="skill">Skill:</label>
                <input
                  type="text"
                  name="skill"
                  data-id={entry.id}
                  value={entry.skill}
                  onChange={handleTyping}
                />
                <IconButton
                  type="submit"
                  name="skills-submit"
                  text="Submit"
                  onClick={handleClick}
                />
              </form>
            ) : (
              <>
                <IconButton
                  type="edit"
                  name="skills-edit"
                  id={`skills-edit-${entry.id}`}
                  value="edit"
                  onClick={handleClick}
                />
                <h2>{entry.skill}</h2>
                <IconButton
                  type="delete"
                  name="skills-delete"
                  id={`skills-delete-${entry.id}`}
                  onClick={handleClick}
                />
              </>
            )}
          </li>
        ))}
      </ul>
      {isEditing === null ? (
        <IconButton
          type="add"
          name="skills-add"
          text="Add new entry"
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
}

export default Skills;
