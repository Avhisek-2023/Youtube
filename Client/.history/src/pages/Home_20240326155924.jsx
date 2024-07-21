import React from "react";
import "./Home.css";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
function Home() {
  return (
    <div className="container_pages_app">
      <LeftSidebar />
      <div className="container2_pages_app">Home</div>
    </div>
  );
}

export default Home;
