import { useState, useEffect } from "react";
import "./employeeCard.css";
import Button from "../Button/Button";
import { YearsWorked } from "../YearsWorked/YearsWorked";

//Emp Card
function EmpCard({ name, role, department, location, startDate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [promoteRole, setPromoteRole] = useState(false);
  const [person, setPerson] = useState({ role, department, location });

  const [button, setButton] = useState("Promote");
  const [star, setStar] = useState(false);

  const yearsWorked = YearsWorked(startDate);

  const clickHandler = () => {
    if (promoteRole === "Team Lead") {
      setPromoteRole("");
      setButton("Promote");
      setStar("");
    } else {
      setPromoteRole("Team Lead");
      setButton("Demote");
      setStar("⭐");
    }
  };

  const inputChanges = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({ ...prevState, [name]: value }));
  };

  const cardEdit = (value, name) =>
    isEditing ? (
      <input value={value} name={name} onChange={inputChanges} />
    ) : (
      <p className={name}>{value}</p>
    );

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={`https://robohash.org/${name}?set=set2`} />
        </div>
        {/* Card Header */}
        <div className="card-header">
          <p className="name">
            {name} {star}
          </p>
        </div>
        {/* Card Body */}
        <div className="card-info">
          {cardEdit(person.role, "role")}
          {cardEdit(person.department, "department")}
          {cardEdit(person.location, "location")}
        </div>

        <div className="card-years">
          <p>{startDate}</p>
          <p>Years Worked: {yearsWorked}</p>
        </div>

        <div className="card-footer">
          <div className="buttons">
            <button onClick={clickHandler}>{button}</button>
            <Button
              onClick={() => setIsEditing((prev) => !prev)}
              text={isEditing ? "Save" : "Edit"}
              role="secondary"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmpCard;
