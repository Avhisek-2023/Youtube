import {
  AiFillAlipaySquare,
  AiFillLike,
  AiFillPlaySquare,
  AiOutlineHome,
} from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import shorts from "../../../public/images/shorts.jpg";
import "./LeftSidebar.css";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
function DrawerSidebar({ toggleDrawer, toggleDrawerSidebar }) {
  return (
    <div
      className="container_drawerLeftsidebar"
      style={{ display: toggleDrawerSidebar.display }}
    >
      <div className="container2_drawerLeftsidebar">
        <div className="Drawer_leftsidebar">
          <div className="icon_sidebar_div">
            <p>
              <AiOutlineHome
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineExplore
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Explore</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <img
                src={shorts}
                width={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Shorts</div>
            </p>
          </div>

          <div className="icon_sidebar_div">
            <p>
              <MdOutlineSubscriptions
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Subscriptions</div>
            </p>
          </div>
        </div>
        <div className="libraryBtn_drawer_leftsidebar">
          <Link to="/library" className="icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Library</div>
            </p>
          </Link>
          <Link to="/history" className="icon_sidebar_div">
            <p>
              <FaHistory
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">History</div>
            </p>
          </Link>
          <Link to="/yourvideos" className="icon_sidebar_div">
            <p>
              <AiFillPlaySquare
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Your Videos</div>
            </p>
          </Link>
          <Link to="/watchlater" className="icon_sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Watch Later</div>
            </p>
          </Link>
          <Link to="/likedvideos" className="icon_sidebar_div">
            <p>
              <AiFillLike
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Liked Videos</div>
            </p>
          </Link>
        </div>
        <div className="subscriptions_lsdbar">
          <h3>Your Subscriptions</h3>
          <div className="channel_lsdbar">
            <p>C</p>
            <div>Channel 1</div>
          </div>
          <div className="channel_lsdbar">
            <p>C</p>
            <div>Channel 2</div>
          </div>
          <div className="channel_lsdbar">
            <p>C</p>
            <div>Channel 3</div>
          </div>
          <div className="channel_lsdbar">
            <p>C</p>
            <div>Channel 4</div>
          </div>
        </div>
      </div>
      <div
        className="container3_drawerLeftsidebar"
        onClick={() => toggleDrawer()}
      ></div>
    </div>
  );
}

export default DrawerSidebar;
