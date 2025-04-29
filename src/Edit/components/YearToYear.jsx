function YearToYear({ from, to }) {
  const years = [];
  const currentYear = new Date().getFullYear();

  for (let i = parseInt(currentYear); i >= 1950; i--) {
    years.push(i);
  }

  const toYears = ["Present", ...years];
  return (
    <>
      <label htmlFor="years">Years</label>
      <div className="years">
        <select name={from} id={from}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <p>-</p>
        <select name={to} id={to}>
          {toYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default YearToYear;
