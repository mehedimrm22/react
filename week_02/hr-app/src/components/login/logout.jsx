function Logout(props) {
  return (
    <>
      <div className="login-button">
        <button onClick={props.click}>Log Out</button>
      </div>
    </>
  );
}

export default Logout;
