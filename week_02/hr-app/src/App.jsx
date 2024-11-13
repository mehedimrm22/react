import "./App.css";

import { useState } from "react";

import EmpList from "./components/EmployeeList/EmployeeList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <div className="container">
        <Header onClick={handleLogin} loginStatus={isLoggedIn} />

        {isLoggedIn ? (
          <main className="cards">
            <EmpList />
          </main>
        ) : (
          <p>Please Log In</p>
        )}

        {/* <main className="cards">
          {isLoggedIn ? <EmpList /> : <p>Please Log In</p>}
        </main> */}

        <Footer />
      </div>
    </>
  );
}

export default App;
