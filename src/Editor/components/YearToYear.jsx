//
const years = ["Present"];
const currentYear = new Date().getFullYear();

for (let i = parseInt(currentYear); i >= 1900; i--) {
  years.push(i);
}
console.log(years);

function YearToYear() {
  return (
    <>
      <select name="firstYear" id="firstYear">
        {years.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
    </>
  );
}

export default YearToYear;
