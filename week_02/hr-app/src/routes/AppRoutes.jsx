import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import List from "../pages/List";
import Form from "../pages/Form";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <List /> },
        { path: "/new", element: <Form /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
