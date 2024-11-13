import { useState } from "react";
import "./employeeCard.css";

//Emp Card
function EmpCard(props) {
  const [role, setRole] = useState(false);
  const [salary, setSalary] = useState(props.initSalary);
  const [button, setButton] = useState("Promote");
  const [star, setStar] = useState(false);

  const clickHandler = () => {
    if (role === "Team Lead") {
      setRole();
      setSalary(props.initSalary);
      setButton("Promote");
      setStar("");
    } else {
      setRole("Team Lead");
      setSalary("7000");
      setButton("Demote");
      setStar("⭐");
    }
  };

  const remindHandler = () => {
    const currentYear = new Date();
    const joiningDate = new Date(props.startDate);
    console.log(joiningDate);
  };

  return (
    <>
      <div className="card">
        <h3>
          {props.name} {star}
        </h3>
        <p>{role}</p>
        <p>{props.initRole}</p>
        <p>{props.department}</p>
        <p>{props.startDate}</p>
        <p>{props.location}</p>
        <p>{salary}</p>
        <p>{props.email}</p>
        <div className="buttons">
          <button onClick={clickHandler}>{button}</button>
          <button onClick={remindHandler}>Reminder</button>
        </div>
      </div>
    </>
  );
}

export default EmpCard;
