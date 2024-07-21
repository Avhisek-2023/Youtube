import React from "react";
import "./Home.css";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../components/ShowVideoGrid/ShowVideoGrid";
function Home() {
  return (
    <div className="container_pages_app">
      <LeftSidebar />
      <div className="container2_pages_app">
        <ShowVideoGrid />
      </div>
    </div>
  );
}

export default Home;
