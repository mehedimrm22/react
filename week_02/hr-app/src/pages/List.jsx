import { useEffect, useState } from "react";
import useAxiosRequest from "../services/useAxios";
import EmpList from "../components/EmployeeList/EmployeeList";
import Form from "../pages/Form";

const List = () => {
  const { read, loading, error } = useAxiosRequest(
    "https://hr-app-backend-9z1g.onrender.com/db"
  );
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await read("/employees");
        setEmployees(data);
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    };

    fetchEmployees();
  }, [read]);

  return (
    <div className="cards">
      <EmpList employees={employees} />
    </div>
  );
};

export default List;
