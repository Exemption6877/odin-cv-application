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

  function handleTyping(e) {
    const inputId = e.target.dataset.id;
    const inputName = e.target.id;
    const value = e.target.value;

    setEntries(
      entries.map((entry) => {
        return entry.id === inputId ? { ...entry, [inputName]: value } : entry;
      })
    );

    console.log(entries);
  }

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="education container">
      <h2>Education</h2>
      {entries.length === 1 ? (
        <form key={entries[0].id}>
          <label htmlFor="educationPlace">School/Name</label>
          <input
            type="text"
            id="eduName"
            name="eduName"
            value={entries[0].value}
            data-id={entries[0].id}
            onChange={handleTyping}
          />
          <label htmlFor="educationDescription">Description</label>
          <input
            type="text"
            id="eduDescription"
            name="eduDescription"
            value={entries[0].value}
            data-id={entries[0].id}
            onChange={handleTyping}
          />
          <YearToYear
            from={"eduStart"}
            to={"eduEnd"}
            dataId={entries[0].id}
            onChange={handleTyping}
          />
          <IconButton
            type="submit"
            name="education-submit"
            text="Submit"
            onClick={handleClick}
          />
        </form>
      ) : null}
    </div>
  );
}

export default Education;
