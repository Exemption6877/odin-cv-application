import "../../styles/Experience.css";
import YearToYear from "../../components/Years";
import IconButton from "../../components/Button";
import { useState } from "react";
import Alert from "../../components/Alert";

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

  const [errors, setErrors] = useState([]);

  function handleTyping(e) {
    const { id, value } = e.target;
    const inputId = e.target.dataset.id;

    if (id === "companyName" || id === "companyPosition") {
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

    if (current && current.companyName.length === 0) {
      currentErrors.push("Please enter the company name.");
    }
    if (current && current.companyPosition.length === 0) {
      currentErrors.push("Please enter your job title or position.");
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
                  companyName: current.companyName.trim().toUpperCase(),
                  companyPosition: current.companyPosition.trim().toUpperCase(),
                  workDescription: current.workDescription.trim(),
                }
              : entry
          )
        );
        setIsEditing(false);
        break;
      case "edit":
        entryId = id.replace("experience-edit-", "");
        setIsEditing(entryId);
        break;
      case "delete":
        entryId = id.replace("experience-delete-", "");
        setIsEditing(false);
        setEntries(entries.filter((entry) => entry.id !== entryId));
        break;
      case "add":
        newId = crypto.randomUUID();
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
        break;
    }
  }

  return (
    <div className="experience component-container">
      <h2>Work Experience</h2>
      {entries.length === 0 ? <p>No entries.</p> : null}
      {errors.length > 0 ? <Alert message={errors[0]} /> : null}

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
                    placeholder="CODENEST INC."
                    data-id={entry.id}
                    onChange={handleTyping}
                    value={entry.companyName}
                  />
                  <label htmlFor="companyPosition">Position</label>
                  <input
                    type="text"
                    id="companyPosition"
                    name="companyPosition"
                    placeholder="FRONTEND DEVELOPER"
                    data-id={entry.id}
                    onChange={handleTyping}
                    value={entry.companyPosition}
                  />
                </div>
                <div className="right-column">
                  <YearToYear
                    from="workStart"
                    to="workEnd"
                    className="experience-years"
                    dataId={entry.id}
                    values={{
                      workStart: entry.workStart,
                      workEnd: entry.workEnd,
                    }}
                    onChange={handleTyping}
                  />
                </div>
              </div>

              <label htmlFor="workDescription">Description</label>
              <textarea
                id="workDescription"
                name="workDescription"
                placeholder="Developed and maintained SPA features using React and Redux."
                data-id={entry.id}
                value={entry.workDescription}
                onChange={handleTyping}
              ></textarea>
              <IconButton
                type="submit"
                name="experience-submit long-button"
                text="Submit"
                onClick={handleClick}
              />
            </form>
          ) : (
            <>
              <div className="experience-row">
                <div className="left-column">
                  <h3 className="experience-company-name">
                    {entry.companyName}
                  </h3>
                  <h3 className="experience-company-position">
                    {entry.companyPosition}
                  </h3>
                </div>
                <div className="right-column">
                  <h3 className="experience-output-years">
                    {entry.workStart && entry.workEnd
                      ? `${entry.workStart} - ${entry.workEnd}`
                      : null}
                  </h3>
                </div>
              </div>
              <div className="description-container">
                {entry.workDescription.length > 0 ? (
                  <>
                    <p className="description-output">
                      {entry.workDescription}
                    </p>
                  </>
                ) : null}
                <div className="button-wrapper">
                  <IconButton
                    type="edit"
                    name="experience-edit small-button"
                    id={`experience-edit-${entry.id}`}
                    onClick={handleClick}
                  />
                  <IconButton
                    type="delete"
                    name="experience-delete small-button"
                    id={`experience-delete-${entry.id}`}
                    onClick={handleClick}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      {!isEditing ? (
        <IconButton
          type="add"
          name="experience-add long-button"
          text="Add new entry"
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
}

export default Experience;
