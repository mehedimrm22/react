// importing the router package
import { createBrowserRouter } from "react-router-dom";

// importing the pages
import Root from "../pages/Root";
import List from "../pages/List";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

// creating the browser paths for different pages
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/list", element: <List /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

// export default router;
