import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";

const SingleEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/employees/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) => console.error("Error fetching employee data:", error));
  }, [id]);

  if (!employee) return <p>Loading employee details...</p>;

  return (
    <div className="card single">
      <h2>Employee Details</h2>
      <div className="card-img">
        <img
          src={`https://api.multiavatar.com/${employee.name}.svg`}
          alt={employee.name}
        />
      </div>
      <div className="card-header">
        <p className="name">{employee.name}</p>
      </div>
      <div className="card-info">
        <p>{employee.role}</p>
        <p>{employee.department}</p>
        <p>{employee.location}</p>
      </div>

      <div className="card-years">
        <p>Joining Date:{employee.startDate}</p>
      </div>
      <Link to="/">
        <Button text="Back to List" role="primary" />
      </Link>
    </div>
  );
};

export default SingleEmployee;
