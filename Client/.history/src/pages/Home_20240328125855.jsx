import React from "react";
import "./Home.css";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../components/ShowVideoGrid/ShowVideoGrid";
function Home() {
  const vids = [
    {
      _id: 1,
      video_src: "vid",
      Channel: "Mohit Kumar",
      title: "video 1",
      description: "description of video 1",
    },
    {
      _id: 2,
      video_src: "vid",
      Channel: "Mohit Kumar",
      title: "video 1",
      description: "description of video 1",
    },
  ];
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
