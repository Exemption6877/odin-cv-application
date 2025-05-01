import { useState } from "react";

function YearToYear({ from, to }) {
  const [isSelected, setIsSelected] = useState(false);
  const [changedYears, setChangedYears] = useState([]);

  const years = [];
  const currentYear = new Date().getFullYear();

  for (let i = parseInt(currentYear); i >= 1950; i--) {
    years.push(i);
  }

  const toYears = ["Present", ...years];

  function toYearChange(e) {
    setIsSelected(true);
    const result = toYears.filter((year) =>
      year === "Present" ? true : year >= e.target.value
    );
    setChangedYears(result);
  }

  const displayYears = isSelected ? changedYears : toYears;

  return (
    <>
      <label htmlFor="years">Years</label>
      <div className="years">
        <select name={from} id={from} onChange={toYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <p>-</p>
        <select name={to} id={to}>
          {displayYears.map((year) => (
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
