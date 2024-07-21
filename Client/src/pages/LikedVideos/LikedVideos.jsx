import "./Liked.css";
import vid from "../../components/video/vid.mp4";
import WHL from "../../components/WHL/WHL";
function LikedVideos() {
  const likedVideo = [
    {
      _id: 1,
      video_src: vid,
      Channel: "Mohit Kumar",
      title: "video 1",
      Uploader: "abc",
      description: "description of video 1",
    },
    {
      _id: 2,
      video_src: vid,
      Channel: "Rohit Kumar",
      title: "video 2",
      Uploader: "abc",
      description: "description of video 2",
    },
    {
      _id: 3,
      video_src: vid,
      Channel: "Punit Kumar",
      Uploader: "abc",
      title: "video 3",
      description: "description of video 3",
    },
    {
      _id: 4,
      video_src: vid,
      Channel: "Sumit Kumar",
      Uploader: "abc",
      title: "video 4",
      description: "description of video 4",
    },
  ];
  return <WHL page={"Liked Video"} videoList={likedVideo} />;
}

export default LikedVideos;
