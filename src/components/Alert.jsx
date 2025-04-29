export default function Alert({ message }) {
  const icon = "./icons/toggle_edit.svg"; // temp placeholder

  return (
    <div className="alert">
      <img src={icon} />
      <p>{message}</p>
    </div>
  );
}
