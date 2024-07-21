import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import "./LeftSidebar.css";
function DrawerSidebar() {
  return (
    <div className="container_drawerLeftsidebar">
      <div className="container_drawerLeftsidebar">
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
            <p>
              <AiOutlineHome
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerSidebar;
