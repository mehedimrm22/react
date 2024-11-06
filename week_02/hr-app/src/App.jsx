import "./App.css";

import EmpList from "./components/EmployeeList/EmployeeList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="cards">
          <EmpList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
