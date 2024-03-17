import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { charactersLoader } from "../pages/Characters";
import { filterCharactersLoader } from "../pages/FilterCharacters";

const Characters = lazy(() => import("../pages/Characters"));
const FilterCharacters = lazy(() => import("../pages/FilterCharacters"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Characters />,
        loader: charactersLoader,
        errorElement: <div className="text-white text-3xl">error</div>,
      },
      {
        path: "/character",
        element: <FilterCharacters />,
        lodaer: filterCharactersLoader,
        errorElement: <div>No results found</div>,
      },
    ],
  },
]);

export default router;
