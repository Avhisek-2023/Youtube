import React from "react";
import "./Home.css";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../components/ShowVideoGrid/ShowVideoGrid";
import vid from "../components/video/vid.mp4";
import vid1 from "../components/video/vid1.mp4";
import vid2 from "../components/video/vid2.mp4";
import vid3 from "../components/video/vid3.mp4";
function Home() {
  const vids = [
    {
      _id: 1,
      video_src: vid,
      Channel: "Mohit Kumar",
      title: "video 1",
      Uploader: "abc",
      description: "description of video 1",
    },
    {
      _id: 2,
      video_src: vid1,
      Channel: "Rohit Kumar",
      title: "video 2",
      Uploader: "abc",
      description: "description of video 2",
    },
    {
      _id: 3,
      video_src: vid2,
      Channel: "Punit Kumar",
      Uploader: "abc",
      title: "video 3",
      description: "description of video 3",
    },
    {
      _id: 4,
      video_src: vid3,
      Channel: "Sumit Kumar",
      Uploader: "abc",
      title: "video 4",
      description: "description of video 4",
    },
  ];

  const NavList = [
    "All",
    "Python",
    "java",
    "C++",
    "Movies",
    "Animation",
    "Gaming",
    "Comedy",
    "Python",
    "java",
    "C++",
    "Movies",
    "Animation",
    "Gaming",
    "Comedy",
    "Animation",
  ];

  return (
    <div className="container_pages_app">
      <LeftSidebar />
      <div className="container2_pages_app">
        <div className="navigation_Home">
          {NavList.map((e, i) => (
            <p className="btn_nav_home" key={i}>
              {e}
            </p>
          ))}
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Home;
