import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./WatchHistory.css";
function WatchHistory() {
  const history = [
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
  return (
    <div className="container_pages_app">
      <LeftSidebar />
      <div className="container2_pages_app">Watch History</div>
    </div>
  );
}

export default WatchHistory;
