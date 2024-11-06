import EmpCard from "../EmployeeCard/EmployeeCard";
import "./employeeList.css";
import employees from "../../data/employeeData";

function EmpList(props) {
  return (
    <>
      {employees.map((employee, index) => (
        <EmpCard
          key={employee.id}
          name={employee.name}
          initRole={employee.initRole}
          department={employee.department}
          startDate={employee.startDate}
          location={employee.location}
          email={employee.email}
          initSalary={employee.initSalary}
        />
      ))}
    </>
  );
}

export default EmpList;
