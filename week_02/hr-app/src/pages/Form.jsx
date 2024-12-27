import { useState } from "react";
import Button from "../components/Button/Button";
import useAxiosRequest from "../services/useAxios";

const Form = ({ onEmployeeAdded }) => {
  const { create, loading, error } = useAxiosRequest("http://localhost:3001");
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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await create("/employees", formData);
      onEmployeeAdded();
      setFormData({
        name: "",
        role: "",
        department: "",
        startDate: "",
        location: "",
      });
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <Button text="Add" type="submit" />
      {loading && <p>Adding Employee...</p>}
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default Form;
