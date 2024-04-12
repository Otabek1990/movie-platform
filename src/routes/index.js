import { lazy } from "react";

const Categories = lazy(() =>import("../pages/protected/categories"))
const Genres = lazy(() =>import("../pages/protected/genres"))

export const routes=[
    {
        path:"/categories",
        element:Categories,
        id:1
    },
    {
        path:"/genres",
        element:Genres,
        id:2
    },
 

]