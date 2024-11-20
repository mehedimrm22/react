import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>React Demo App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
