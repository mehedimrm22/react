import { RouterProvider } from "react-router-dom";

import { router } from "./routes/AppRoutes";

import "./App.css";
import { useState } from "react";

import EmpList from "./components/EmployeeList/EmployeeList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  /* const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }; */

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
