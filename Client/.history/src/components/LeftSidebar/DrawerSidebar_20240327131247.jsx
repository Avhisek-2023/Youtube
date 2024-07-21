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
function DrawerSidebar({ toggleDrawer }) {
  return (
    <div className="container_drawerLeftsidebar">
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
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Library</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <FaHistory
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">History</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <AiFillPlaySquare
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Your Videos</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Watch Later</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <AiFillLike
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Liked Videos</div>
            </p>
          </div>
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
    </div>
  );
}

export default DrawerSidebar;
