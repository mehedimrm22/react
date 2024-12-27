import EmpCard from "../EmployeeCard/EmployeeCard";
import "./employeeList.css";

function EmpList({ employees }) {
  return (
    <>
      {employees.map((employee) => {
        return <EmpCard key={employee.id} {...employee} />;
      })}
    </>
  );
}

export default EmpList;
