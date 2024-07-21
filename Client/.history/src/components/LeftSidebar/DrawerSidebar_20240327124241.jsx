import {
  AiFillAlipaySquare,
  AiFillPlaySquare,
  AiOutlineHome,
} from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import shorts from "../../../public/images/shorts.jpg";
import "./LeftSidebar.css";
import { FaHistory } from "react-icons/fa";
function DrawerSidebar() {
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
              <div className="text_sidebar_icon">Your videos</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <Md
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">History</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerSidebar;
