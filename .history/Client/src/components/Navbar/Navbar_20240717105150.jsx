import "../Navbar/Navbar.css";
import youtube_logo from "../../../public/images/Youtube_logo.png";
import SearchBar from "./SearchBar/SearchBar";
import { FaVideo, FaBell } from "react-icons/fa";
import "./SearchBar/SearchBar.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginCredentials from "../GoogleLogin/GoogleLoginCredentials";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { GrChannel, GrLogout } from "react-icons/gr";
import { useState } from "react";
import { useEffect } from "react";

import ButtonForModal from "../ButttonForModal";
import axiosClient from "../../axios_client";

function Navbar({ toggleDrawer }) {
  const user = useSelector((state) => state.user.users[0]);
  const navigate = useNavigate();
  const channel = useSelector((state) => state.channel.channels[0]);
  // console.log(channel)
  // console.log(currentChannel);
  const [logOutSelector, setLogOutSelector] = useState(false);

  const [currentUser, setCurrentUser] = useState(user);

  const [currentChannel, setCurrentChannel] = useState({});
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user]);
  useEffect(() => {
    if (currentUser) {
      let url = "/channel/getChannel/:id";
      url = url.replace(":id", currentUser.data.result._id);
      axiosClient
        .get(url)
        .then(({ data }) => {
          console.log(data);
          setCurrentChannel(data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }, [currentUser]);
  const logout = () => {
    localStorage.removeItem("accessToken");
    setCurrentUser(null);
    setLogOutSelector(false);
    navigate("/");
    window.location.reload();
  };

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
                <div className="logo-align">
                  <IoArrowBackCircleOutline />
                </div>
                <div className="ml-2">Back</div>
              </div>
              <hr />
              <div className="select ">
                {currentChannel ? (
                  <>
                    {/* {console.log(currentChannel.data)} */}
                    <div className="logo-align">
                      <GrChannel />
                    </div>
                    <Link
                      to={"/channel"}
                      className="ml-2"
                      style={{ textDecoration: "none" }}
                    >
                      Your Channel
                    </Link>
                  </>
                ) : (
                  <ButtonForModal />
                )}
              </div>
              <hr />
              <div className="select" onClick={() => logout()}>
                <div className="logo-align">
                  <GrLogout />
                </div>
                <div className="ml-2">Logout</div>
              </div>
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
