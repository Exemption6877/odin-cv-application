import IconButton from "../../components/IconButton";
import "../../styles/Title.css";

function Title() {
  return (
    <div className="title container">
      <form>
        <div className="heading container">
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
          />
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Bartender"
          />
        </div>
        <IconButton type="submit" />
      </form>
    </div>
  );
}

export default Title;
