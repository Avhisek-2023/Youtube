import "../Navbar/Navbar.css";
import youtube_logo from "../../../public/images/Youtube_logo.png";
import SearchBar from "./SearchBar/SearchBar";
import { FaVideo, FaBell } from "react-icons/fa";
import "./SearchBar/SearchBar.css";
import { Link } from "react-router-dom";
import GoogleLoginCredentials from "../GoogleLogin/GoogleLoginCredentials";
import { useSelector } from "react-redux";

function Navbar({ toggleDrawer }) {
  const currentUser = useSelector((state) => state.users);
  // console.log(currentUser);
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
          {currentUser ? (
            <>
              <div className="Channel_logo_App">
                <p className="fstChar">
                  {/* {currentUser?.result.name ? (
                    <>{currentUser?.result.name.charAt(0).toUpperCase()}</>
                  ) : (
                    <>{currentUser?.result.email.charAt(0).toUpperCase()}</>
                  )} */}
                </p>
              </div>
            </>
          ) : (
            <>
              <GoogleLoginCredentials />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
