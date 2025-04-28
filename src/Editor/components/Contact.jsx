function Contact() {
  return (
    <div className="contact container">
      <h2>Contact</h2>
      <label htmlFor="phone">Phone Number:</label>
      <input type="number" id="phone" name="number" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" name="location" />
      <label htmlFor="website">Website:</label>
      <input type="url" id="website" name="website" />
    </div>
  );
}

export default Contact;
