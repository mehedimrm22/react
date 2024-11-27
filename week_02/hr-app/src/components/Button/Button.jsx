function Button({ onClick, text, type = "button", role = "primary" }) {
  return (
    <>
      <button onClick={onClick} type={type} className={`button ${role}`}>
        {text}
      </button>
    </>
  );
}

export default Button;
