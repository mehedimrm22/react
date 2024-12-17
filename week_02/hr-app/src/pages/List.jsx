/* import { useEffect, useState } from "react";
import EmpList from "../components/EmployeeList/EmployeeList";

const List = ({ data }) => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setIsLoading(false);
      });
  }, [data]);

  return (
    <>
      {isLoading ? (
        <p>Loadding...</p>
      ) : (
        <div className="cards">
          <EmpList employees={employees} />
        </div>
      )}
    </>
  );
};

export default List;
 */

import { useEffect, useState } from "react";
import EmpList from "../components/EmployeeList/EmployeeList";
import Form from "../pages/Form";

const List = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [triggerFetch, setTriggerFetch] = useState(false);

  const fetchEmployees = () => {
    setIsLoading(true);
    fetch("http://localhost:3001/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, [triggerFetch]);

  const handleNewEmployee = () => {
    setTriggerFetch((prev) => !prev);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="cards">
          <EmpList employees={employees} />
        </div>
      )}
    </div>
  );
};

export default List;
