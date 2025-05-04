import IconButton from "../../components/IconButton";
import getInputAttributes from "../../utils/inputAttributes";
import "../../styles/Title.css";
import Alert from "../../components/alert";
import { useState } from "react";

export default function Title() {
  // bundle both
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isAlerted, setIsAlerted] = useState(false);
  function maxChars(size, string) {
    return string.length === size;
  }

  function handleTyping(e) {
    const newValue = e.target.value;

    if (e.target.id === "fullName") {
      if (!maxChars(24, newValue)) {
        setFullName(newValue);
        setIsAlerted(false);
      } else {
        setIsAlerted(true);
      }
    } else if (e.target.id === "position") {
      if (!maxChars(30, newValue)) {
        setPosition(newValue.toUpperCase());
        setIsAlerted(false);
      } else {
        setIsAlerted(true);
      }
    }
  }

  function handleClick(e) {
    e.preventDefault();
    setIsAlerted(false);
    setPosition(position.trim());
    setFullName(fullName.trim());
    setIsClicked(!isClicked);
  }

  return (
    <div className="title container">
      {isAlerted ? <Alert message="Exceeding maximum line length" /> : null}

      {isClicked ? (
        <div className="heading row">
          <div className="heading-text">
            <h1>{fullName}</h1>
            <h3>{position}</h3>
          </div>
        </div>
      ) : (
        <form noValidate className={isClicked ? "hidden" : ""}>
          <div className="heading container">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              onChange={handleTyping}
              value={fullName}
              {...getInputAttributes()}
            />
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Bartender"
              onChange={handleTyping}
              value={position}
              {...getInputAttributes()}
            />
          </div>
        </form>
      )}

      {!isClicked ? (
        <IconButton type="submit" name="title-submit" onClick={handleClick} />
      ) : (
        <IconButton type="edit" name="title-edit" onClick={handleClick} />
      )}
    </div>
  );
}
