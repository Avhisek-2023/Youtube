import "../Navbar/Navbar.css";
import youtube_logo from "../../../public/images/Youtube_logo.png";
import SearchBar from "./SearchBar/SearchBar";
import { FaVideo, FaBell } from "react-icons/fa";
import "./SearchBar/SearchBar.css";
import { Link } from "react-router-dom";
import GoogleLoginCredentials from "../GoogleLogin/GoogleLoginCredentials";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { GrLogout } from "react-icons/gr";
import { useState } from "react";

function Navbar({ toggleDrawer }) {
  const [logOutSelector, setLogOutSelector] = useState(false);
  const currentUser = useSelector((state) => state.user.users[0]);
  console.log(currentUser);

  // const currentUser = null;
  return (
    <div className="container_Navbar">
      <div className="Burger_logo_Navbar">
        <div className="burger" onClick={() => toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to="/" className="logo_div_Navbar">
          <img src={youtube_logo} alt="" height="32px" width="50px" />
          <p className="logo">Youtube</p>
        </Link>
      </div>
      <SearchBar />
      <div className="flex">
        <FaVideo className="searchIcon_SearchBar" />
        <div className="apps-box">
          <p className="app-box"></p>
          <p className="app-box"></p>
          <p className="app-box"></p>
          <p className="app-box"></p>
          <p className="app-box"></p>
          <p className="app-box"></p>
          <p className="app-box"></p>
          <p className="app-box"></p>
          <p className="app-box"></p>
        </div>
        <FaBell className="searchIcon_SearchBar" />
        <div className="Auth_cont_Navbar">
          {currentUser && localStorage.getItem("accessToken") ? (
            <>
              <div className="Channel_logo_App">
                <p className="fstChar" onClick={() => setLogOutSelector(true)}>
                  {currentUser.data.result.email.charAt(0).toUpperCase()}
                </p>
              </div>
            </>
          ) : (
            <>
              <GoogleLoginCredentials />
            </>
          )}
        </div>
        {logOutSelector ? (
          <>
            <div className="selectContainer">
              <div onClick={() => setLogOutSelector(false)} className="select ">
                <IoArrowBackCircleOutline />
                Back
              </div>
              <hr />
              <div className="select">Logout</div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Navbar;
