import { useEffect, useState } from "react";
import "./ChannelDescription.css";
import { FaEdit, FaUpload } from "react-icons/fa";
import axiosClient from "../../axios_client";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ChannelDescription = () => {
  const user = useSelector((state) => state.user.users[0]);

  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(user);

  const [currentChannel, setCurrentChannel] = useState({});

  const [uploadModal, setUploadModal] = useState(false);

  const closeModal = () => {
    return setUploadModal(false);
  };

  const openModal = () => {
    // console.log(id);
    setUploadModal(true);
  };

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
          setCurrentChannel(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }, [currentUser]);

  return !loading ? (
    <div className="container3_chanel">
      <Link to={"/"} className="back_btn">
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
        <b style={{ color: "red", marginTop: "5px" }}>
          Total Subscribers:{" "}
          <span style={{ color: "black" }}>
            {currentChannel.data.subscribers}
          </span>
        </b>
      </div>

      <>
        <p className="editbtn_chanel">
          <FaEdit />
          <b>Edit Channel</b>
        </p>
        <p className="uploadbtn_chanel">
          <FaUpload />
          <b>Upload Video</b>
        </p>
      </>
    </div>
  ) : (
    <>Loading...</>
  );
};

export default ChannelDescription;
