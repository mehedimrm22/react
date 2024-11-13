import Button from "../Button/button";

const Header = (props) => {
  const buttonText = props.loginStatus ? "Log out" : "Log in";

  return (
    <header>
      <h1>Employee dashboard</h1>
      <Button onClick={props.onClick} text={buttonText} />
    </header>
  );
};

export default Header;
