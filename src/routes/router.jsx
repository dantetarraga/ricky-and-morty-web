import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { charactersLoader } from "../pages/Characters";

const Characters = lazy(() => import("../pages/Characters"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // index: true,
        path: "characters",
        element: <Characters />,
        loader: charactersLoader,
        errorElement: <div className="text-white text-3xl">error</div>,
      },
    ],
  },
]);

export default router;
