import { useEffect } from "react";
import "./ChannelDescription.css";
import { FaEdit, FaUpload } from "react-icons/fa";
import axiosClient from "../../axios_client";
// import { useSelector } from "react-redux";
const ChannelDescription = () => {
  const user = useSelector((state) => state.user.users[0]);
  const [currentChannel, setCurrentChannel] = useState({});
  useEffect(() => {
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
  }, []);
  return (
    <div className="container3_chanel">
      <div className="chanel_logo_chanel">
        {/* <b>{currentchannel?.name.charAt(0).toUpperCase()}</b> */}
        <b>A</b>
      </div>
      <div className="description_chanel">
        <b>XYZ</b>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe sunt
          corrupti minima nemo nulla atque hic ab? Accusamus temporibus
          architecto quis non itaque nobis!
        </p>
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
  );
};

export default ChannelDescription;
