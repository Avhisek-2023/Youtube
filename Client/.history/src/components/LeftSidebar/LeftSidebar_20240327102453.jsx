import "./LeftSidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplorer } from "react-icons/md";
function LeftSidebar() {
  return (
    <div className="container_leftSidebar">
      <div className="icon_sidebar_div">
        <AiOutlineHome size={22} className="icon_sidebar" />
        <div className="text_sidebar_icon">Home</div>
      </div>
      <div className="icon_sidebar_div">
        <MdOutlineExplorer size={22} className="icon_sidebar" />
        <div className="text_sidebar_icon">Home</div>
      </div>
      <div className="icon_sidebar_div">
        <AiOutlineHome size={22} className="icon_sidebar" />
        <div className="text_sidebar_icon">Home</div>
      </div>
      <div className="icon_sidebar_div">
        <AiOutlineHome size={22} className="icon_sidebar" />
        <div className="text_sidebar_icon">Home</div>
      </div>
    </div>
  );
}

export default LeftSidebar;
