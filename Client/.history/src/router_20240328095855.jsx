import App from "./App";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Library from "./pages/Library/Library";
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
        path: "/library",
        element: <Library />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/library",
        element: <Library />,
      },
    ],
  },
]);
export default router;
