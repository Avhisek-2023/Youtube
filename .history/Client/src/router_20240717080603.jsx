import App from "./App";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Library from "./pages/Library/Library";
import WatchHistory from "./pages/WatchHistory/WatchHistory";
import WatchLater from "./pages/WatchLater/WatchLater";
import LikedVideos from "./pages/LikedVideos/LikedVideos";
import YourVideos from "./pages/YourVideos/YourVideos";
import VideoPage from "./pages/VideoPage/VideoPage";
import ChannelDescription from "./pages/Channel/ChannelDescription";
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
      {
        path: "/yourvideos",
        element: <YourVideos />,
      },
      {
        path: "/videopage/:vid",
        element: <VideoPage />,
      },
      {
        path: "/channel",
        element: <ChannelDescription />,
      },
    ],
  },
]);
export default router;
