import IconButton from "../../components/IconButton";
import "../../styles/Title.css";
import { useState } from "react";

function Title() {
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  function handleTyping(e) {
    const newValue = e.target.value;

    if (e.target.id === "fullName") {
      setFullName(newValue);
    } else if (e.target.id === "position") {
      setPosition(newValue.toUpperCase());
    }
  }

  return (
    <div className="title container">
      <form>
        <div className="heading container">
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            onChange={handleTyping}
            value={fullName}
          />
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Bartender"
            onChange={handleTyping}
            value={position}
          />
        </div>
        <IconButton type="submit" name={"title-submit"} />
      </form>
    </div>
  );
}

export default Title;
