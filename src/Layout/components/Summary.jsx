import "../../styles/Summary.css";
import IconButton from "../../components/IconButton";
import { useState } from "react";

function Summary() {
  const [entry, setEntry] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  function handleTyping(e) {
    setEntry(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setEntry(entry.trim());
    setIsEditing(!isEditing);
  }

  return (
    <div className="summary container">
      <h2>Profile Summary</h2>
      {isEditing ? (
        <form>
          <label htmlFor="summary">Profile Summary</label>
          <textarea
            name="summary"
            id="summary"
            onChange={handleTyping}
            value={entry}
          ></textarea>
          <IconButton
            type="submit"
            name="skills-submit"
            text="Submit"
            onClick={handleClick}
          />
        </form>
      ) : (
        <>
          <p>{entry}</p>
          <IconButton
            type="edit"
            name="summary-edit"
            id={`summary-edit`}
            valu="edit"
            onClick={handleClick}
          />
        </>
      )}
    </div>
  );
}

export default Summary;
