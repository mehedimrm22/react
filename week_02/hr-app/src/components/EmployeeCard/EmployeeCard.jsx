import { useState } from "react";
import "./employeeCard.css";

function EmpCard(props) {
  const [role, setRole] = useState(props.initRole);
  const [salary, setSalary] = useState(props.initSalary);
  const [button, setButton] = useState("Promote");

  const clickHandler = () => {
    console.log("Clicked");
    if (role === "Team Lead") {
      setRole(props.initRole);
      setSalary(props.initSalary);
      setButton("Promote");
    } else {
      setRole("Team Lead");
      setSalary("7000");
      setButton("Demote");
    }
  };

  return (
    <>
      <div className="card">
        <h3>{props.name}</h3>
        <p>{role}</p>
        <p>{props.department}</p>
        <p>{props.startDate}</p>
        <p>{props.location}</p>
        <p>{salary}</p>
        <p>{props.email}</p>
        <div className="buttons">
          <button onClick={clickHandler}>{button}</button>
          <button>Reminder</button>
        </div>
      </div>
    </>
  );
}

export default EmpCard;
