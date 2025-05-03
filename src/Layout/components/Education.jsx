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
  const [isEditing, setIsEditing] = useState(entries[0].id);

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
    }
  }

  return (
    <div className="education container">
      <h2>Education</h2>
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
            />
          </div>
        )
      )}
      <IconButton type="add" name="education-add" text="Add new entry" />
    </div>
  );
}

export default Education;

// //
// <form key={entries[0].id}>
// <YearToYear
//   from={"eduStart"}
//   to={"eduEnd"}
//   dataId={entries[0].id}
//   onChange={handleTyping}
// />
// <label htmlFor="educationPlace">School/Name</label>
// <input
//   type="text"
//   id="eduName"
//   name="eduName"
//   value={entries[0].eduName}
//   data-id={entries[0].id}
//   onChange={handleTyping}
// />
// <label htmlFor="educationDescription">Description</label>
// <input
//   type="text"
//   id="eduDescription"
//   name="eduDescription"
//   value={entries[0].eduDescription}
//   data-id={entries[0].id}
//   onChange={handleTyping}
// />

// <IconButton
//   type="submit"
//   name="education-submit"
//   text="Submit"
//   value="submit"
//   onClick={handleClick}
// />
// </form>
