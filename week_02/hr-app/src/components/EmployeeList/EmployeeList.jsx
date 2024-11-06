import EmpCard from "../EmployeeCard/EmployeeCard";
import "./employeeList.css";
import employees from "../../data/employeeData";

function EmpList(props) {
  return (
    <>
      {employees.map((employee) => {
        return <EmpCard key={employee.id} {...employee} />;
      })}
    </>
  );
}

export default EmpList;
