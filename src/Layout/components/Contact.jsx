import "../../styles/Contact.css";
import IconButton from "../../components/IconButton";
import { useState } from "react";

export default function Contact() {
  // TODO: Set rules to these inputs

  const [entry, setEntry] = useState({
    phone: "",
    email: "",
    location: "",
    website: "",
  });

  const [isEditing, setIsEditing] = useState(true);
  const [isAlerted, setIsAlerted] = useState(false);

  function phoneLogic(string) {
    return /^\+\d{0,17}$/.test(string);
  }

  function websiteLogic(link) {
    const length = link.length;

    if (length === 1 && link[0] === "w") return true;
    if (length === 2 && link[1] === "w") return true;
    if (length === 3 && link[2] === "w") return true;
    if (length === 4 && link[3] === ".") return true;
    if (length > 4) return true;

    return false;
  }

  function handleEmailUpdating(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleWebsiteUpdating(link) {
    const regex = /^www\.\w+\.\w+$/i;
    return regex.test(link);
  }

  function handleTyping(e) {
    const { id, value } = e.target;

    const updatedValue = id === "position" ? value.toUpperCase() : value;
    setEntry((prev) => ({ ...prev, [id]: updatedValue }));
  }

  function handleClick(e) {
    e.preventDefault();

    setIsEditing(!isEditing);
  }

  return (
    <div className="contact container">
      {!isEditing && (
        <IconButton type="edit" name="contact-edit" onClick={handleClick} />
      )}

      <h2>Contact</h2>

      {isEditing ? (
        <form noValidate>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={entry.phone}
            onChange={handleTyping}
            placeholder="+123456789"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={entry.email}
            onChange={handleTyping}
            placeholder="example@web.com"
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={entry.location}
            onChange={handleTyping}
            placeholder="Bergen, NY, United States"
          />

          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            value={entry.website}
            onChange={handleTyping}
            placeholder="example.com"
          />

          <IconButton
            type="submit"
            name="contact-submit"
            text="Submit"
            onClick={handleClick}
          />
        </form>
      ) : (
        Object.entries(entry).map(([key, value]) =>
          value.length > 0 ? (
            <div className="contact-entry" key={key}>
              <img src={`/icons/contact/${key}.svg`} alt={`${key} icon`} />
              <p>{value}</p>
            </div>
          ) : null
        )
      )}
    </div>
  );
}
