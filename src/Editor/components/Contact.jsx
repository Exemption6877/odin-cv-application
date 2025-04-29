function Contact() {
  // TODO: Set rules to these inputs
  return (
    <div className="contact container">
      <h2>Contact</h2>
      <form>
        <label htmlFor="phone">Phone Number:</label>
        <input type="number" id="phone" name="number" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" />
        <label htmlFor="website">Website:</label>
        <input type="url" id="website" name="website" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Contact;
