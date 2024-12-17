import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import createRoutes from "./routes/AppRoutes"; // Import the route creation function

// Import App.css to apply global styles
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Define the handleNewEmployee function here
  const handleNewEmployee = () => {
    console.log("New employee added. Trigger re-fetch of data.");
    // Add your logic here to trigger re-fetch or update the list.
  };

  const loginHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  // Pass the handleNewEmployee function to createRoutes
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
