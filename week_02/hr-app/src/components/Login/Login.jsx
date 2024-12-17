import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = ({ loginHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkCredentials = (e) => {
    e.preventDefault();
    if (username.toLowerCase() === "admin" && password === "1234") {
      loginHandler();
      navigate("/");
    } else {
      alert("use correct credentials");
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={checkCredentials}>
        <h2>Please Login to see the Employee List</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          />
        </div>{" "}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <Button text="Log in" type="submit" />
      </form>
    </div>
  );
};

export default Login;
