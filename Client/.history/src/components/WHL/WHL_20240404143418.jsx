import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import "./WHL.css";

function WHL({ page, videoList }) {
  return (
    <div className="container_pages_app">
      <LeftSidebar />
      <div className="container2_pages_app">
        <p className="det">
          <div className="box_WHL leftside_WHL">
            <b>Your {page} Shown Here</b>
            <div className="clear_History_btn">Clear History</div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default WHL;
