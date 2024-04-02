import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Layout from "../components/Layout";
import { charactersLoader } from "../pages/Characters";

const Characters = lazy(() => import("../pages/Characters"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Characters />,
        loader: charactersLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

export default router;
