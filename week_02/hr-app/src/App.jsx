import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import createRoutes from "./routes/AppRoutes";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNewEmployee = () => {
    console.log("New employee added. Trigger re-fetch of data.");
  };

  const loginHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const router = createRoutes(isLoggedIn, loginHandler, handleNewEmployee);

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
