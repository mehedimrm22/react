import "./App.css";

import { useState } from "react";

import EmpList from "./components/EmployeeList/EmployeeList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/login/login";
import Logout from "./components/login/logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <div>
        <Header />
        {isLoggedIn ? (
          <>
            <Logout click={handleLogin} />
            <main className="cards">
              <EmpList />
            </main>
          </>
        ) : (
          <Login click={handleLogin} />
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;
