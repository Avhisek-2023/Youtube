import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import DrawerSidebar from "./components/LeftSidebar/DrawerSidebar";
// import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      {<DrawerSidebar />}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
