import "./App.css";

import EmpList from "./components/EmployeeList/EmployeeList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Header />
        <div className="cards">
          <EmpList />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
