import "../../styles/Experience.css";
import YearToYear from "../../components/YearToYear";
import IconButton from "../../components/IconButton";
import { useState } from "react";

function Experience() {
  const [entries, setEntries] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "",
      companyPosition: "",
      workDescription: "",
      workStart: "",
      workEnd: "",
    },
  ]);
  const [isEditing, setIsEditing] = useState(
    entries.length > 0 ? entries[0].id : null
  );

  function handleTyping(e) {
    const inputId = e.target.dataset.id;
    const inputName = e.target.id;
    const value = e.target.value;
    console.log(entries);

    setEntries(
      entries.map((entry) =>
        entry.id === inputId ? { ...entry, [inputName]: value } : entry
      )
    );
  }

  function handleClick(e) {
    e.preventDefault();
    const { value, id } = e.currentTarget;

    if (value === "submit") {
      setIsEditing(null);
    } else if (value === "delete") {
      const entryId = id.replace("experience-delete-", "");
      setIsEditing(null);
      setEntries(entries.filter((entry) => entry.id !== entryId));
    } else if (value === "add") {
      const newId = crypto.randomUUID();
      setEntries([
        ...entries,
        {
          id: newId,
          companyName: "",
          companyPosition: "",
          workDescription: "",
          workStart: "",
          workEnd: "",
        },
      ]);
      setIsEditing(newId);
    } else if (value === "edit") {
      const entryId = id.replace("experience-edit-", "");
      setIsEditing(entryId);
    }
  }

  return (
    <div className="experience container">
      <h2>Work Experience</h2>
      {entries.length === 0 ? <p>No entries.</p> : null}
      {entries.map((entry) => (
        <div key={entry.id} className="experience">
          {isEditing === entry.id ? (
            <form>
              <div className="experience-row">
                <div className="left-column">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    data-id={entry.id}
                    onChange={handleTyping}
                    value={entry.companyName}
                  />
                  <label htmlFor="companyPosition">Position</label>
                  <input
                    type="text"
                    id="companyPosition"
                    name="companyPosition"
                    data-id={entry.id}
                    onChange={handleTyping}
                    value={entry.companyPosition}
                  />
                </div>
                <div className="right-column">
                  <YearToYear
                    from="workStart"
                    to="workEnd"
                    dataId={entry.id}
                    onChange={handleTyping}
                    values={{
                      workStart: entry.workStart,
                      workEnd: entry.workEnd,
                    }}
                  />
                </div>
              </div>

              <label htmlFor="workDescription">Description</label>
              <textarea
                name="workDescription"
                id="workDescription"
                data-id={entry.id}
                onChange={handleTyping}
                value={entry.workDescription}
              ></textarea>
              <IconButton
                type="submit"
                name="experience-submit"
                text="Submit"
                onClick={handleClick}
              />
            </form>
          ) : (
            <>
              <h2>{entry.companyName}</h2>
              <h3>{entry.companyPosition}</h3>
              <p>
                {entry.workStart} - {entry.workEnd}
              </p>
              <p>{entry.workDescription}</p>
              <IconButton
                type="edit"
                name="experience-edit"
                id={`experience-edit-${entry.id}`}
                onClick={handleClick}
              />
              <IconButton
                type="delete"
                name="experience-delete"
                id={`experience-delete-${entry.id}`}
                onClick={handleClick}
              />
            </>
          )}
        </div>
      ))}
      {isEditing === null ? (
        <IconButton
          type="add"
          name="experience-add"
          text="Add new entry"
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
}

export default Experience;
