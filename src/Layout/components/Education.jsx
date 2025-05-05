import "../../styles/Education.css";
import YearToYear from "../../components/YearToYear";
import IconButton from "../../components/IconButton";
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
    <div className="education container">
      <h2>Education</h2>
      {entries.length === 0 ? <p>No entries.</p> : null}
      {errors.length > 0 ? <Alert message={errors[0]} /> : null}

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
                placeholder="Harvard University"
                {...getInputAttributes()}
              />
              <label htmlFor="educationDescription">Description</label>
              <input
                type="text"
                id="eduDescription"
                name="eduDescription"
                value={entry.eduDescription}
                data-id={entry.id}
                placeholder="Bachelor of Science in Physics"
                onChange={handleTyping}
                {...getInputAttributes()}
              />
              <IconButton
                type="submit"
                name="education-submit"
                text="Submit"
                onClick={handleClick}
              />
            </form>
          </div>
        ) : (
          <div key={entry.id} className={`entry education-${entry.id}`}>
            <IconButton
              type="edit"
              name="education-edit"
              id={`education-edit-${entry.id}`}
              value="edit"
              onClick={handleClick}
            />
            {entry.eduStart.length > 0 ? (
              <h2>
                {entry.eduStart} - {entry.eduEnd}
              </h2>
            ) : null}

            <h2>{entry.eduName}</h2>

            {entry.eduDescription.length > 0 ? (
              <p>{entry.eduDescription}</p>
            ) : null}

            <IconButton
              type="delete"
              name="education-delete"
              id={`education-delete-${entry.id}`}
              onClick={handleClick}
            />
          </div>
        )
      )}
      {!isEditing ? (
        <IconButton
          type="add"
          name="education-add"
          text="Add new entry"
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
}

export default Education;
