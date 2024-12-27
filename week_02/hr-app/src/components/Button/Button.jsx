import styles from "./Button.module.css";

function Button({ onClick, text, type = "button", role = "primary" }) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`${styles.button} ${styles[role]}`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
