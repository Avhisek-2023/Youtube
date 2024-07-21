import React from "react";
import "./Home.css";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../components/ShowVideoGrid/ShowVideoGrid";
import vid from "../components/video/vid.mp4";
function Home() {
  const vids = [
    {
      _id: 1,
      video_src: vid,
      Channel: "Mohit Kumar",
      title: "video 1",
      description: "description of video 1",
    },
    {
      _id: 2,
      video_src: vid,
      Channel: "Rohit Kumar",
      title: "video 2",
      description: "description of video 2",
    },
    {
      _id: 3,
      video_src: vid,
      Channel: "Punit Kumar",
      title: "video 3",
      description: "description of video 3",
    },
    {
      _id: 4,
      video_src: vid,
      Channel: "Sumit Kumar",
      title: "video 4",
      description: "description of video 4",
    },
  ];
  return (
    <div className="container_pages_app">
      <LeftSidebar />
      <div className="container2_pages_app">
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Home;
