import "../styles/Alert.css";

export default function Alert({ message }) {
  const icon = "./icons/alert.svg"; // temp placeholder

  return (
    <div className="alert">
      <img src={icon} />
      <p>{message}</p>
    </div>
  );
}
