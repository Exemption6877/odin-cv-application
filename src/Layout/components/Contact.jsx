import Alert from "../../components/alert";
import getInputAttributes from "../../utils/inputAttributes";
import IconButton from "../../components/Button";
import { useState } from "react";
import "../../styles/Contact.css";

export default function Contact() {
  const [entry, setEntry] = useState({
    phone: "",
    email: "",
    location: "",
    website: "",
  });

  const [isEditing, setIsEditing] = useState(true);
  const [errors, setErrors] = useState([]);

  function handlePhoneUpdating(number) {
    return /^\+\d{0,17}$/.test(number);
  }

  function handleEmailUpdating(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleWebsiteUpdating(link) {
    return /^www\.\w+\.\w+(\/[\w\-\/]*)?$/i.test(link);
  }

  function handleTyping(e) {
    const { id, value } = e.target;

    let updatedValue = value;

    if (id === "email" || id === "website") {
      updatedValue = updatedValue.toLowerCase();
    }

    setEntry((prev) => ({ ...prev, [id]: updatedValue }));
  }

  function handleClick(e) {
    e.preventDefault();

    const currentErrors = [];

    if (!handlePhoneUpdating(entry.phone) && entry.phone.length > 0) {
      currentErrors.push("Invalid phone. Format: +123456789");
    }

    if (!handleEmailUpdating(entry.email) && entry.email.length > 0) {
      currentErrors.push("Invalid email. Example: user@mail.com");
    }

    if (!handleWebsiteUpdating(entry.website) && entry.website.length > 0) {
      currentErrors.push("Invalid website. Example: www.example.com/example");
    }

    if (
      entry.phone.length === 0 &&
      entry.email.length === 0 &&
      entry.location.length === 0 &&
      entry.website.length === 0
    ) {
      currentErrors.push("Please fill in at least one field.");
    }

    if (currentErrors.length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors([]);
    setEntry({
      phone: entry.phone.trim(),
      email: entry.email.trim(),
      location: entry.location.trim(),
      website: entry.website.trim(),
    });
    setIsEditing(!isEditing);
  }

  return (
    <div className="contact component-container">
      {!isEditing && (
        <IconButton
          type="edit"
          name="contact-edit small-button"
          onClick={handleClick}
        />
      )}

      <h2>Contact</h2>

      {errors.length > 0 ? <Alert message={errors[0]} /> : null}

      {isEditing ? (
        <form noValidate>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={entry.phone}
            placeholder="+123456789"
            onChange={handleTyping}
            {...getInputAttributes()}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={entry.email}
            placeholder="user@mail.com"
            onChange={handleTyping}
            {...getInputAttributes()}
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={entry.location}
            placeholder="Bergen, NY, United States"
            onChange={handleTyping}
            {...getInputAttributes()}
          />

          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            value={entry.website}
            placeholder="www.example.com"
            onChange={handleTyping}
            {...getInputAttributes()}
          />

          <IconButton
            type="submit"
            name="contact-submit long-button"
            text="Submit"
            onClick={handleClick}
            {...getInputAttributes()}
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
