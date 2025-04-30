import "../styles/Alert.css";

export default function Alert({ message, className }) {
  const icon = "./icons/alert.svg";

  return (
    <div className={`alert ${className}`}>
      <img src={icon} alt="Alert Icon" />
      <p>{message}</p>
    </div>
  );
}
