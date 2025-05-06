import "../../styles/Summary.css";
import IconButton from "../../components/IconButton";
import { useState } from "react";
import Alert from "../../components/alert";

function Summary() {
  const [entry, setEntry] = useState({
    summary: "",
  });

  const [isEditing, setIsEditing] = useState(true);
  const [errors, setErrors] = useState([]);

  function handleTyping(e) {
    const { id, value } = e.target;
    setErrors([]);

    setEntry((prev) => ({ ...prev, [id]: value }));
  }

  function handleClick(e) {
    e.preventDefault();

    const currentErrors = [];

    if (entry.summary.trim().length === 0) {
      currentErrors.push(`Please enter your summary.`);
    }

    if (currentErrors.length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors([]);
    setEntry({
      summary: entry.summary.trim(),
    });

    setIsEditing(!isEditing);
  }

  return (
    <div className="summary container">
      <h2>Profile Summary</h2>
      {errors.length > 0 ? <Alert message={errors[0]} /> : null}

      {isEditing ? (
        <form>
          <label htmlFor="summary">Profile Summary</label>
          <textarea
            name="summary"
            id="summary"
            onChange={handleTyping}
            value={entry.summary}
            placeholder="Your summary..."
          ></textarea>
          <IconButton
            type="submit"
            name="summary-submit"
            text="Submit"
            onClick={handleClick}
          />
        </form>
      ) : (
        <>
          <p>{entry.summary}</p>
          <IconButton
            type="edit"
            name="summary-edit"
            id={`summary-edit`}
            value="edit"
            onClick={handleClick}
          />
        </>
      )}
    </div>
  );
}

export default Summary;
