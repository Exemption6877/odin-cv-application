import "../../styles/Education.css";
import YearToYear from "../../components/YearToYear";
import IconButton from "../../components/IconButton";
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

  const [isClicked, setIsClicked] = useState(false);
  const [isEditing, setIsEditing] = useState(
    entries.length > 0 ? entries[0].id : null
  );

  function handleTyping(e) {
    const inputId = e.target.dataset.id;
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
      setIsClicked(!isClicked);
      setIsEditing(false);
    } else if (value === "edit") {
      const entryId = id.replace("education-edit-", "");
      setIsEditing(entryId);
      console.log(entryId);
    } else if (value === "delete") {
      const entryId = id.replace("education-delete-", "");
      setIsEditing(null);
      setEntries(entries.filter((entry) => entry.id !== entryId));
    } else if (value === "add") {
      const newId = crypto.randomUUID();
      console.log(newId);
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
    }
  }

  return (
    <div className="education container">
      <h2>Education</h2>
      {entries.length === 0 ? <p>No entries.</p> : null}
      {entries.map((entry) =>
        isEditing === entry.id ? (
          <div key={entry.id} className={`edit ${entry.id}`}>
            <form>
              <YearToYear
                from={"eduStart"}
                to={"eduEnd"}
                dataId={entry.id}
                onChange={handleTyping}
              />
              <label htmlFor="educationPlace">School/Name</label>
              <input
                type="text"
                id="eduName"
                name="eduName"
                value={entry.eduName}
                data-id={entry.id}
                onChange={handleTyping}
              />
              <label htmlFor="educationDescription">Description</label>
              <input
                type="text"
                id="eduDescription"
                name="eduDescription"
                value={entry.eduDescription}
                data-id={entry.id}
                onChange={handleTyping}
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
            <h2>
              {entry.eduStart} - {entry.eduEnd}
            </h2>
            <h2>{entry.eduName}</h2>
            <p>{entry.eduDescription}</p>
            <IconButton
              type="delete"
              name="education-delete"
              id={`education-delete-${entry.id}`}
              onClick={handleClick}
            />
          </div>
        )
      )}
      <IconButton
        type="add"
        name="education-add"
        text="Add new entry"
        onClick={handleClick}
      />
    </div>
  );
}

export default Education;
