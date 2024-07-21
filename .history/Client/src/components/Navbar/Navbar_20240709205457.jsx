import "../Navbar/Navbar.css";
import youtube_logo from "../../../public/images/Youtube_logo.png";
import SearchBar from "./SearchBar/SearchBar";
import { FaVideo, FaBell } from "react-icons/fa";
import "./SearchBar/SearchBar.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api";

function Navbar({ toggleDrawer }) {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const currentUser = null;
  function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
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
                  {currentUser?.result.name ? (
                    <>{currentUser?.result.name.charAt(0).toUpperCase()}</>
                  ) : (
                    <>
                      <GoogleLogin />
                      {currentUser?.result.email.charAt(0).toUpperCase()}
                    </>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const data = decodeJwtResponse(credentialResponse.credential);
                  console.log(data);
                  dispatch(userLogin(data.email));
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
