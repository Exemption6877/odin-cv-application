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
  const [errors, setErrors] = useState([]);

  function maxChars(size, string) {
    return string.length > size;
  }

  function handleTyping(e) {
    const { id, value } = e.target;
    setErrors([]);
    if (maxChars(MAXCHARS, value)) {
      const error = `You can only enter up to ${MAXCHARS} characters.`;
      setErrors([error]);
      return;
    }

    const updatedValue = id === "position" ? value.toUpperCase() : value;
    setEntry((prev) => ({ ...prev, [id]: updatedValue }));
  }

  function handleClick(e) {
    e.preventDefault();

    const currentErrors = [];

    if (maxChars(MAXCHARS, entry.fullname)) {
      currentErrors.push(`You can only enter up to ${MAXCHARS} characters.`);
    }

    if (entry.fullname.trim().length === 0) {
      currentErrors.push(`Please enter your name.`);
    }

    if (currentErrors.length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors([]);
    setEntry({
      fullname: entry.fullname.trim(),
      position: entry.position.trim(),
    });

    setIsEditing(!isEditing);
  }

  return (
    <div className="title container">
      {errors.length > 0 ? <Alert message={errors[0]} /> : null}

      {isEditing ? (
        <form noValidate>
          <input
            type="text"
            className="fullname"
            id="fullname"
            name="fullname"
            placeholder="John Doe"
            value={entry.fullname}
            onChange={handleTyping}
            {...getInputAttributes()}
          />
          <input
            type="text"
            className="position"
            id="position"
            name="position"
            placeholder="BARTENDER"
            value={entry.position}
            onChange={handleTyping}
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
