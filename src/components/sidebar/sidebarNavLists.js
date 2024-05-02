import { BiCategory } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import { MdMovieFilter } from "react-icons/md";
import { ImFilm } from "react-icons/im";
import { PiFilmStripDuotone } from "react-icons/pi";
import { IoImagesOutline } from "react-icons/io5";


export const sidebarNavLists = [
  {
    title: "BO'LIMLAR",
    id: 1,
    items: [
      {
        path: "/",
        name: "Asosiy",
        id: 1,
        Icon: BiCategory,
      },
      {
        path: "categories",
        name: "Kategoriyalar",
        id: 2,
        Icon: MdLocalMovies,
      },
      {
        path: "genres",
        name: "Janrlar",
        id: 3,
        Icon: MdMovieFilter,
      },
      {
        path: "films",
        name: "Filmlar",
        id: 4,
        Icon: ImFilm,
      },
      {
        path: "serials",
        name: "Seriallar",
        id: 5,
        Icon: PiFilmStripDuotone,
      },
      {
        path: "banners",
        name: "Bannerlar",
        id: 6,
        Icon: IoImagesOutline,
      },
      {
        path: "topMovies",
        name: "Eng yaxshi filmlar",
        id: 7,
        Icon: IoImagesOutline,
      },
    ],
  },
];
