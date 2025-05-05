import Alert from "../../components/alert";
import getInputAttributes from "../../utils/inputAttributes";
import IconButton from "../../components/IconButton";
import { useState } from "react";
import "../../styles/Title.css";

export default function Title() {
  const MAXCHARS = 32;

  const [entry, setEntry] = useState({
    fullname: "",
    position: "",
  });

  const [isEditing, setIsEditing] = useState(true);
  const [isAlerted, setIsAlerted] = useState(false);

  function maxChars(size, string) {
    return string.length > size;
  }

  function handleTyping(e) {
    const { id, value } = e.target;

    if (maxChars(MAXCHARS, value)) {
      setIsAlerted(true);
      return;
    }

    setIsAlerted(false);

    const updatedValue = id === "position" ? value.toUpperCase() : value;
    setEntry((prev) => ({ ...prev, [id]: updatedValue }));
  }

  function handleClick(e) {
    e.preventDefault();

    setEntry({
      fullname: entry.fullname.trim(),
      position: entry.position.trim(),
    });

    setIsAlerted(false);
    setIsEditing(!isEditing);
  }

  return (
    <div className="title container">
      {isAlerted ? (
        <Alert message={`You can only enter up to ${MAXCHARS} characters.`} />
      ) : null}

      {isEditing ? (
        <form noValidate>
          <input
            type="text"
            className="fullname"
            id="fullname"
            name="fullname"
            placeholder="John Doe"
            onChange={handleTyping}
            value={entry.fullname}
            {...getInputAttributes()}
          />
          <input
            type="text"
            className="position"
            id="position"
            name="position"
            placeholder="BARTENDER"
            onChange={handleTyping}
            value={entry.position}
            {...getInputAttributes()}
          />
        </form>
      ) : (
        <>
          <h1 className="fullname">{entry.fullname}</h1>
          <h3 className="position">{entry.position}</h3>
        </>
      )}

      {isEditing ? (
        <IconButton type="submit" name="title-submit" onClick={handleClick} />
      ) : (
        <IconButton type="edit" name="title-edit" onClick={handleClick} />
      )}
    </div>
  );
}
