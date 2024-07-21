import { useEffect, useState } from "react";
import "./ChannelDescription.css";
import { FaEdit, FaUpload } from "react-icons/fa";
import axiosClient from "../../axios_client";
import { useSelector } from "react-redux";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { Link } from "react-router-dom";

const ChannelDescription = () => {
  const user = useSelector((state) => state.user.users[0]);
  const [loading, setLoading] = useState(true);
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
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }, [currentUser]);
  //   console.log(currentChannel.data);
  return !loading ? (
    <div className="container3_chanel">
      <Link
        to={"/"}
        className="back_btn"
        // onClick={() => setvideouploadpage(true)}
      >
        <FaUpload />
        <b>Back</b>
      </Link>
      {/* <LeftSidebar /> */}
      <div className="chanel_logo_chanel">
        {/* <b></b> */}
        <b>{currentChannel.data.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_chanel">
        <b className="channel_name">{currentChannel.data.name}</b>
        <p className="channel_description">{currentChannel.data.description}</p>
        <b style={{ color: "gray", marginTop: "5px" }}>Total Subscribers</b>
        {/* <b>{currentchannel?.name}</b>
      <p>{currentchannel?.desc}</p> */}
      </div>
      {/* {currentuser?.result._id === currentchannel?._id && ( */}
      <>
        <p
          className="editbtn_chanel"
          // onClick={() => seteditcreatechanelbtn(true)}
        >
          <FaEdit />
          <b>Edit Channel</b>
        </p>
        <p
          className="uploadbtn_chanel"
          // onClick={() => setvideouploadpage(true)}
        >
          <FaUpload />
          <b>Upload Video</b>
        </p>
      </>
      {/* )} */}
    </div>
  ) : (
    <>Loading...</>
  );
};

export default ChannelDescription;
