import "./LeftSidebar.css";
import { AiOutlineHome } from "react-icons/ai";
function LeftSidebar() {
  return (
    <div className="container_leftSidebar">
      <div className="icon_sidebar_div">
        <AiOutlineHome size={22} className="icon_sidebar" />
      </div>
    </div>
  );
}

export default LeftSidebar;
