import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Liked.css";
import vid from "../../components/video/vid.mp4";
import WHL from "../../components/WHL/WHL";
function LikedVideos() {
  return (
    <div className="container_pages_app">
      <LeftSidebar />
      <div className="container2_pages_app">Liked Videos</div>
    </div>
  );
}

export default LikedVideos;
