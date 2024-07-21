import "./LeftSidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { Link } from "react-router-dom";
function LeftSidebar() {
  return (
    <div className="container_leftSidebar">
      <Link to="/" className="icon_sidebar_div">
        <AiOutlineHome size={22} className="icon_sidebar" />
        <div className="text_sidebar_icon">Home</div>
      </Link>
      <Link to="/explore" className="icon_sidebar_div">
        <MdOutlineExplore size={22} className="icon_sidebar" />
        <div className="text_sidebar_icon">Explore</div>
      </Link>
      <Link to="/subscriptions" className="icon_sidebar_div">
        <MdOutlineSubscriptions size={22} className="icon_sidebar" />
        <div className="text_sidebar_icon" style={{ fontSize: "12px" }}>
          Subscriptions
        </div>
      </Link>
      <Link to="/library" className="icon_sidebar_div">
        <MdOutlineVideoLibrary size={22} className="icon_sidebar" />
        <div className="text_sidebar_icon">Library</div>
      </Link>
    </div>
  );
}

export default LeftSidebar;
