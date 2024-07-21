import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import DrawerSidebar from "./components/LeftSidebar/DrawerSidebar";
import { useState } from "react";
// import "./index.css";
function App() {
  const [toggleSidebar, setToggleSidebar] = useState({
    display: "none",
  });
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
