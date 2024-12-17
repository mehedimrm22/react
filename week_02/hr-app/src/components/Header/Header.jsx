import { Link } from "react-router-dom";
import "./Header.css";
import Button from "../Button/Button";

const Header = ({ isLoggedIn, loginHandler }) => {
  const buttonText = isLoggedIn ? "Log out" : "Log in";

  return (
    <header>
      <h1>Employee Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Employees</Link>
          </li>
          <li>
            <Link to="/new">New Employee</Link>
          </li>
        </ul>
      </nav>
      <Button onClick={loginHandler} text={buttonText} />
    </header>
  );
};

export default Header;
