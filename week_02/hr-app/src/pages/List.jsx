import { useEffect, useState } from "react";
import EmpList from "../components/EmployeeList/EmployeeList";

const List = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loadding...</p>
      ) : (
        <div className="cards">
          <EmpList />
        </div>
      )}
    </>
  );
};

export default List;

/* const Form = () => {
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
      .then((data) => {
        console.log("Data added successfully:", data);
      });
  }; */
