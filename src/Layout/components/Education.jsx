import "../../styles/Education.css";
import YearToYear from "../../components/Years";
import IconButton from "../../components/Button";
import getInputAttributes from "../../utils/inputAttributes";
import Alert from "../../components/alert";
import { useState } from "react";

function Education() {
  const [entries, setEntries] = useState([
    {
      id: crypto.randomUUID(),
      eduName: "",
      eduDescription: "",
      eduStart: "",
      eduEnd: "",
    },
  ]);

  const [isEditing, setIsEditing] = useState(
    entries.length > 0 ? entries[0].id : null
  );

  const [errors, setErrors] = useState([]);

  function handleTyping(e) {
    const { id, value } = e.target;
    const inputId = e.target.dataset.id;

    if (id === "eduName") {
      setErrors([]);
    }

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

    if (current && current.eduName.length === 0) {
      currentErrors.push("School or institution name is required.");
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
                  eduName: current.eduName.trim().toUpperCase(),
                  eduDescription: current.eduDescription.trim().toUpperCase(),
                  eduStart: current.eduStart.trim(),
                  eduEnd: current.eduEnd.trim(),
                }
              : entry
          )
        );
        setIsEditing(false);
        break;
      case "edit":
        entryId = id.replace("education-edit-", "");
        setIsEditing(entryId);
        break;
      case "delete":
        entryId = id.replace("education-delete-", "");
        setIsEditing(false);
        setEntries(entries.filter((entry) => entry.id !== entryId));
        break;
      case "add":
        newId = crypto.randomUUID();
        setEntries([
          ...entries,
          {
            id: newId,
            eduName: "",
            eduDescription: "",
            eduStart: "",
            eduEnd: "",
          },
        ]);
        setIsEditing(newId);
        break;
    }
  }

  return (
    <div className="education component-container">
      <h2>Education</h2>
      {errors.length > 0 ? <Alert message={errors[0]} /> : null}
      {entries.length === 0 ? <p>No entries.</p> : null}

      {entries.map((entry) =>
        isEditing === entry.id ? (
          <div key={entry.id} className={`edit-education ${entry.id}`}>
            <form>
              <YearToYear
                from="eduStart"
                to="eduEnd"
                className="edu-years"
                onChange={handleTyping}
                values={{
                  eduStart: entry.eduStart,
                  eduEnd: entry.eduEnd,
                }}
                dataId={entry.id}
                {...getInputAttributes()}
              />

              <label htmlFor="educationPlace">School/Name</label>
              <input
                type="text"
                id="eduName"
                name="eduName"
                value={entry.eduName}
                onChange={handleTyping}
                data-id={entry.id}
                placeholder="HARVARD UNIVERSITY"
                {...getInputAttributes()}
              />
              <label htmlFor="educationDescription">Description</label>
              <input
                type="text"
                id="eduDescription"
                name="eduDescription"
                value={entry.eduDescription}
                data-id={entry.id}
                placeholder="B.Sc. in Computer Science"
                onChange={handleTyping}
                {...getInputAttributes()}
              />
              <IconButton
                type="submit"
                name="education-submit long-button"
                text="Submit"
                onClick={handleClick}
              />
            </form>
          </div>
        ) : (
          <div key={entry.id} className={`education-entry`}>
            {entry.eduStart.length > 0 ? (
              <h3 className="education-entry-years">
                {entry.eduStart} - {entry.eduEnd}
              </h3>
            ) : null}

            <h3 className="education-entry-name">{entry.eduName}</h3>

            {entry.eduDescription.length > 0 ? (
              <p className="education-entry-description">
                {entry.eduDescription}
              </p>
            ) : null}

            <div className="button-wrapper">
              <IconButton
                type="edit"
                name="education-edit small-button"
                id={`education-edit-${entry.id}`}
                value="edit"
                onClick={handleClick}
              />
              <IconButton
                type="delete"
                name="education-delete small-button"
                id={`education-delete-${entry.id}`}
                onClick={handleClick}
              />
            </div>
          </div>
        )
      )}
      {!isEditing ? (
        <IconButton
          type="add"
          name="education-add long-button"
          text="Add new entry"
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
}

export default Education;
