import App from "./App";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Library from "./pages/Library/Library";
import WatchHistory from "./pages/WatchHistory/WatchHistory";
import WatchLater from "./pages/WatchLater/WatchLater";
import LikedVideos from "./pages/LikedVideos/LikedVideos";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/history",
        element: <WatchHistory />,
      },
      {
        path: "/watchlater",
        element: <WatchLater />,
      },
      {
        path: "/likedvideos",
        element: <LikedVideos />,
      },
    ],
  },
]);
export default router;
