import IconButton from "../../components/Button";
import { useState } from "react";
import "../../styles/Skills.css";
import Alert from "../../components/alert";

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

  const [errors, setErrors] = useState([]);

  function handleTyping(e) {
    const { id, value } = e.target;
    const inputId = e.target.dataset.id;

    setErrors([]);

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

    if (current && current.skill.length === 0) {
      currentErrors.push("Please provide a skill.");
    }

    if (currentErrors.length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors([]);

    switch (value) {
      case "submit":
        setErrors([]);
        setEntries(
          entries.map((entry) =>
            entry.id === current.id
              ? {
                  ...entry,
                  skill: current.skill.trim(),
                }
              : entry
          )
        );
        setIsEditing(false);
        break;
      case "edit":
        entryId = id.replace("skills-edit-", "");
        setIsEditing(entryId);
        break;
      case "delete":
        entryId = id.replace("skills-delete-", "");
        setIsEditing(false);
        setEntries(entries.filter((entry) => entry.id !== entryId));
        break;
      case "add":
        newId = crypto.randomUUID();
        setEntries([
          ...entries,
          {
            id: newId,
            skill: "",
          },
        ]);
        setIsEditing(newId);
        break;
    }
  }
  return (
    <div className="skills component-container">
      <h2>Skills</h2>
      {entries.length === 0 ? <p>No entries.</p> : null}
      {errors.length > 0 ? <Alert message={errors[0]} /> : null}
      <ul>
        {entries.map((entry) => (
          <li key={entry.id} className="skill">
            {isEditing === entry.id ? (
              <form>
                <label htmlFor="skill">Skill:</label>
                <input
                  type="text"
                  name="skill"
                  id="skill"
                  data-id={entry.id}
                  value={entry.skill}
                  placeholder="HTML5"
                  onChange={handleTyping}
                />
              </form>
            ) : (
              <>
                <p> {entry.skill}</p>
                <div className="button-wrapper">
                  <IconButton
                    type="edit"
                    name="skills-edit small-button"
                    id={`skills-edit-${entry.id}`}
                    value="edit"
                    onClick={handleClick}
                  />
                  <IconButton
                    type="delete"
                    name="skills-delete small-button"
                    id={`skills-delete-${entry.id}`}
                    onClick={handleClick}
                  />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      {!isEditing ? (
        <IconButton
          type="add"
          name="skills-add long-button"
          text="Add new entry"
          onClick={handleClick}
        />
      ) : (
        <IconButton
          type="submit"
          name="skills-submit long-button"
          text="Submit"
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default Skills;
