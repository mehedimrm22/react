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
        <h3>{props.name}</h3>
        <p>{role}</p>
        <p>Dept: {props.department}</p>
        <p>Start Date: {props.startDate}</p>
        <p>Location: {props.location}</p>
        <p>Salary: {salary}</p>
        <p>Email: {props.email}</p>
        <button onClick={clickHandler}>Promote</button>
      </div>
    </>
  );
}

export default EmpCard;
