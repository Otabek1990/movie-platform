import { lazy } from "react";

const Categories = lazy(() => import("../pages/protected/categories"));
const Genres = lazy(() => import("../pages/protected/genres"));
const Films = lazy(() => import("../pages/protected/films"));
const CreateFilm = lazy(() => import("../pages/protected/createFilm"));
const Serials = lazy(() => import("../pages/protected/serials"));
const CreateSerial = lazy(() => import("../pages/protected/createSerial"));
const Banners = lazy(() => import("../pages/protected/banners"));
const FilmDetail = lazy(() => import("../pages/protected/filmDetail"));
const SerialDetail = lazy(() => import("../pages/protected/serialDetail"));
const EditFilm = lazy(() => import("../pages/protected/editFilm"));
const EditSerial = lazy(() => import("../pages/protected/editSerial"));
const TopMovies = lazy(() => import("../pages/protected/topMovies"));

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
  {
    path: "/serials",
    element: Serials,
    id: 5,
  },
  {
    path: "/createSerial",
    element: CreateSerial,
    id: 6,
  },
  {
    path: "/banners",
    element: Banners,
    id: 7,
  },
  {
    path: "/film/:id",
    element: FilmDetail,
    id: 8,
  },
  {
    path: "/serial/:id",
    element: SerialDetail,
    id: 9,
  },
  {
    path: "/editFilm/:id",
    element: EditFilm,
    id: 10,
  },
  {
    path: "/editSerial/:id",
    element: EditSerial,
    id: 11,
  },
  {
    path: "/topMovies",
    element: TopMovies,
    id: 12,
  },
];
