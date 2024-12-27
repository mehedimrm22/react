import { useState } from "react";
import Button from "../components/Button/Button";
import styles from "./Form.module.css";

const Form = ({ onEmployeeAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    department: "",
    startDate: "",
    location: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        onEmployeeAdded();
        setFormData({
          name: "",
          role: "",
          department: "",
          startDate: "",
          location: "",
        });
      })
      .catch((error) => console.error("Error adding employee:", error));
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={changeHandler}
      />
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        value={formData.role}
        onChange={changeHandler}
      />
      <label htmlFor="department">Department</label>
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={changeHandler}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={changeHandler}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={changeHandler}
      />
      <Button text="Add" type="submit" />
    </form>
  );
};

export default Form;
