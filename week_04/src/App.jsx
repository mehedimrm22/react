// importing router provider
import { Route, RouterProvider } from "react-router-dom";

//importing router from appRoutes
import { router } from "./routes/appRoutes";

import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

/* 

// importing router provider
import { Route, RouterProvider } from "react-router-dom";

//importing router from appRoutes
import { router } from "./routes/appRoutes";

import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

*/
