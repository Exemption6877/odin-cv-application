import "../../styles/Contact.css";
import IconButton from "../../components/IconButton";
import { useState } from "react";

export default function Contact() {
  // TODO: Set rules to these inputs

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");

  function phoneLogic(string) {
    const regex = /^\+\d{0,17}$/;
    if (string.at(0) === "+") {
      if (regex.test(string)) {
        return true;
      } else {
        return false;
      }
    }
  }

  function handlePhoneDeleting(e) {
    if (
      (e.key === "Backspace" && phone.length === 1) ||
      (e.key === "Delete" && phone.length === 1)
    ) {
      setPhone("");
    }
  }

  function handleTyping(e) {
    const newValue = e.target.value.trim();

    switch (e.target.id) {
      case "phone":
        const phoneNum = phoneLogic(newValue);
        !phoneNum ? console.log("error") : setPhone(newValue);

        break;
      case "email":
        setEmail(newValue);
        break;

      case "location":
        setLocation(newValue);
        break;

      case "website":
        setWebsite(newValue);
        break;
    }
  }

  function handleClick(e) {}

  return (
    <div className="contact container">
      <h2>Contact</h2>
      <form>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleTyping}
          onKeyDown={handlePhoneDeleting}
          placeholder="+123456789"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleTyping}
          placeholder="example@web.com"
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={handleTyping}
          placeholder="Bergen, NY, United States"
        />
        <label htmlFor="website">Website</label>
        <input
          type="url"
          id="website"
          name="website"
          value={website}
          onChange={handleTyping}
          placeholder="example.com"
        />
        <IconButton type="submit" name="contact-submit" text="Submit" />
      </form>
    </div>
  );
}
