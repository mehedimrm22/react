import { useState } from "react";

import "./employeeCard.css";

function EmpCard(props) {
  const [role, setRole] = useState(props.initRole);
  const [salary, setSalary] = useState(props.initSalary);

  const clickHandler = () => {
    console.log("Clicked");
    if (role === "Team Lead") {
      setRole(props.initRole);
      setSalary(props.initSalary);
    } else {
      setRole("Team Lead");
      setSalary("7000");
    }
  };

  return (
    <>
      <div className="card">
        <h3>Name: {props.name}</h3>
        <p>Role: {role}</p>
        <p>Dept: {props.department}</p>
        <p>Email: {props.email}</p>
        <p>Salary: {salary}</p>
        <button onClick={clickHandler}>Promote</button>
      </div>
    </>
  );
}

export default EmpCard;
