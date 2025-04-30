import IconButton from "../../components/IconButton";
import "../../styles/Title.css";
import { useState } from "react";

function Title() {
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  function handleTyping(e) {
    const newValue = e.target.value;

    if (e.target.id === "fullName") {
      setFullName(newValue);
    } else if (e.target.id === "position") {
      setPosition(newValue.toUpperCase());
    }
  }

  function handleClick(e) {
    e.preventDefault();
    setIsClicked(true);
    console.log("clicked");
  }

  return (
    <div className="title container">
      {isClicked ? (
        <div className="heading container">
          <h1>{fullName}</h1>
          <h3>{position}</h3>
        </div>
      ) : (
        <form className={isClicked ? "hidden" : ""}>
          <div className="heading container">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onChange={handleTyping}
              value={fullName}
            />
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Bartender"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onChange={handleTyping}
              value={position}
            />
          </div>
          <IconButton
            type="submit"
            name={"title-submit"}
            onClick={handleClick}
          />
        </form>
      )}
    </div>
  );
}

export default Title;
