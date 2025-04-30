export default function IconButton({ type, name, text = "", onClick }) {
  function buttonPath(string) {
    switch (string) {
      case "add":
        return "./icons/add.svg";

      case "confirm":
        return "./icons/confirm.svg";

      case "delete":
        return "./icons/delete.svg";

      case "submit":
        return "./icons/confirm.svg";

      case "edit":
        return "./icons/edit.svg";

      case "toggle_edit":
        return "./icons/toggle_edit.svg";

      default:
        return "./icons/toggle_edit.svg";
    }
  }

  const icon = buttonPath(type);

  return (
    <>
      <button
        type={type === "submit" ? "submit" : "button"}
        className={name}
        onClick={onClick}
      >
        <img src={icon} alt={type} />
        {text}
      </button>
    </>
  );
}
