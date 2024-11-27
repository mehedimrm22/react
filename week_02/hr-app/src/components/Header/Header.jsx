import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  const buttonText = props.loginStatus ? "Log out" : "Log in";
  return (
    <header>
      <h1>Employee Dashboard</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Employees</NavLink>
          </li>
          {/* <li>
            <NavLink to="/employees">Employees</NavLink>
          </li> */}
          <li>
            <NavLink to="/new">New Employee</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

/* mport Button from "../Button/Button";
import "./Header.css";

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
 */
