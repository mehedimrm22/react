import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { YearsWorked } from "../YearsWorked/YearsWorked";
import styles from "./EmployeeCard.module.css";

function EmpCard({ id, name, role, department, location, startDate }) {
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
      <p className={styles[name]}>{value}</p>
    );

  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={`https://api.multiavatar.com/${name}.svg`} alt={name} />
      </div>
      {/* Card Header */}
      <div className={styles.card_header}>
        <p className={styles.name}>
          {name} {star}
        </p>
      </div>
      {/* Card Body */}
      <div className={styles.card_info}>
        {cardEdit(person.role, "role")}
        {cardEdit(person.department, "department")}
        {cardEdit(person.location, "location")}
      </div>

      <div className={styles.card_years}>
        <p>{startDate}</p>
        <p>Years Worked: {yearsWorked}</p>
      </div>

      <div className={styles.card_footer}>
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            onClick={clickHandler}
            text={button}
          />

          <Button
            onClick={() => setIsEditing((prev) => !prev)}
            text={isEditing ? "Save" : "Edit"}
            role="secondary"
          />
          <Link to={`/employee/${id}`}>
            <Button text="See More" role="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmpCard;
