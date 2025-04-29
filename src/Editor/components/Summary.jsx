function Summary() {
  return (
    <div className="summary container">
      <h2>Profile Summary</h2>
      <form>
        <label htmlFor="summary">Profile Summary</label>
        <textarea name="summary" id="summary"></textarea>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Summary;
