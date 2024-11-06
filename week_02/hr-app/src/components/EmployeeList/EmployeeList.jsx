import EmpCard from "../EmployeeCard/EmployeeCard";
import "./employeeList.css";
import "../../data/employeeData";

function EmpList(props) {
  return (
    <>
      <EmpCard
        name="Mahmudur Rahman"
        initRole="Front End Developer"
        department="Something"
        email="mahmudur@email.com"
        initSalary="5000"
      />
      <EmpCard
        name="Brett Lee"
        initRole="Back End Developer"
        department="Something"
        email="brett@email.com"
        initSalary="6000"
      />
      <EmpCard
        name="Athina Kantis"
        initRole="Full Stack Developer"
        department="Something"
        email="athina@email.com"
        initSalary="5000"
      />
      <EmpCard
        name="Saata"
        initRole="UI"
        department="Something"
        email="saara@email.com"
        initSalary="4000"
      />
      <EmpCard
        name="Andrei"
        initRole="UX"
        department="Something"
        email="andrei@email.com"
        initSalary="4000"
      />
    </>
  );
}

export default EmpList;
