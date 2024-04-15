import { lazy } from "react";

const Categories = lazy(() => import("../pages/protected/categories"));
const Genres = lazy(() => import("../pages/protected/genres"));
const Films = lazy(() => import("../pages/protected/films"));
const CreateFilm = lazy(() => import("../pages/protected/createFilm"));

export const routes = [
  {
    path: "/categories",
    element: Categories,
    id: 1,
  },
  {
    path: "/genres",
    element: Genres,
    id: 2,
  },

  {
    path: "/films",
    element: Films,
    id: 3,
  },
  {
    path: "/createFilm",
    element: CreateFilm,
    id: 4,
  },
];
