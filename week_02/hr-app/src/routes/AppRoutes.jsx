// Example AppRoutes.jsx (for React Router v6)
import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/List";
import Form from "../pages/Form";
import Login from "../components/Login/Login";
import ErrorPage from "../pages/ErrorPage";
import SingleEmployee from "../pages/SingleEmployee";

const createRoutes = (isLoggedIn, loginHandler, handleNewEmployee) =>
  createBrowserRouter(
    [
      {
        path: "/",
        element: isLoggedIn ? (
          <Root isLoggedIn={isLoggedIn} loginHandler={loginHandler} />
        ) : (
          <Login loginHandler={loginHandler} />
        ),
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <List /> },
          {
            path: "/new",
            element: <Form onEmployeeAdded={handleNewEmployee} />, // Pass the handler to Form
          },
          { path: "/employee/:id", element: <SingleEmployee /> },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

export default createRoutes;
