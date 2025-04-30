import "../../styles/Contact.css";
import IconButton from "../../components/IconButton";
import { useState } from "react";

export default function Contact() {
  // TODO: Set rules to these inputs

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [isClicked, setisClicked] = useState(false);

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

  function handleDeleting(e) {
    const itemId = e.target.id;
    const isDeleting = e.key === "Backspace" || e.key === "Delete";
    const newValue =
      e.target.value.slice(0, e.target.selectionStart) +
      e.target.value.slice(e.target.selectionEnd);

    switch (itemId) {
      case "phone":
        if (isDeleting) {
          setPhone(newValue);
        }
        break;
      case "website":
        if (isDeleting) {
          setWebsite(newValue);
        }
        break;
    }
  }

  // For submit button
  function handleEmailUpdating() {
    if (email.search("@") !== -1 && email.search(".") !== -1) {
      return true;
    } else {
      return false;
    }
  }

  function websiteLogic(string) {
    const length = string.length;

    for (let i = 0; i < string.length; i++) {
      if (length === 1 && string[0] === "w") {
        return true;
      } else if (length === 2 && string[1] === "w") {
        return true;
      }
      if (length === 3 && string[2] === "w") {
        return true;
      }

      if (length === 4 && string[3] === ".") {
        return true;
      }

      if (length > 4) {
        return true;
      }
    }
  }

  function handleWebsiteUpdating() {
    const regex = /^www\.\w+\.\w+$/i;
    console.log("website issue");
    return regex.test(website);
  }

  function handleTyping(e) {
    const newValue = e.target.value;

    switch (e.target.id) {
      case "phone":
        !phoneLogic(newValue) ? console.log("error") : setPhone(newValue);

        break;
      case "email":
        setEmail(newValue);
        break;

      case "location":
        setLocation(newValue);
        break;

      case "website":
        websiteLogic(newValue)
          ? setWebsite(newValue)
          : console.log("email error");
        break;
    }
  }

  function handleClick(e) {
    e.preventDefault();
    if (handleEmailUpdating() && handleWebsiteUpdating()) {
      setisClicked(!isClicked);
    }

    console.log("nope");
  }

  return (
    <div className="contact container">
      {isClicked ? (
        <IconButton type="edit" name="contact-edit" onClick={handleClick} />
      ) : null}

      <h2>Contact</h2>
      {isClicked ? (
        <>
          <div className="contact-entry">
            <img src="/icons/contact/phone.svg" alt="Phone Icon" />
            <p>{phone}</p>
          </div>

          <div className="contact-entry">
            <img src="/icons/contact/email.svg" alt="Email Icon" />
            <p>{email}</p>
          </div>
          <div className="contact-entry">
            <img src="/icons/contact/location.svg" alt="Location Icon" />
            <p>{location}</p>
          </div>
          <div className="contact-entry">
            <img src="/icons/contact/website.svg" alt="Website Icon" />
            <p>{website}</p>
          </div>
        </>
      ) : (
        <form noValidate>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleTyping}
            onKeyDown={handleDeleting}
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
            onKeyDown={handleDeleting}
            placeholder="example.com"
          />
          <IconButton
            type="submit"
            name="contact-submit"
            text="Submit"
            onClick={handleClick}
          />
        </form>
      )}
    </div>
  );
}
