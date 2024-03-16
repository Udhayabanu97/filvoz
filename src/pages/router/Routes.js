import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Movies from "../Movies";
import TvSeries from "../TvSeries";
import Bookmark from "../Bookmark";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tv-series",
    element: <TvSeries />,
  },
  {
    path: "/bookmark",
    element: <Bookmark />,
  },
]);
