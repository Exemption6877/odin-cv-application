import { useState } from "react";

function YearToYear({ from, to, className, dataId, onChange }) {
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
    <div className={className}>
      <label htmlFor="years">Years</label>
      <div className="years">
        <select
          name={from}
          id={from}
          data-id={dataId}
          onChange={(e) => {
            toYearChange(e);
            onChange(e);
          }}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          name={to}
          id={to}
          data-id={dataId}
          onChange={(e) => {
            onChange(e);
          }}
        >
          {displayYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default YearToYear;
