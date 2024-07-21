import vid from "../../components/video/vid.mp4";
function VideoPage() {
  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videopage">
            <video
              src={vid}
              className="video_showVideo_videoPage"
              controls
              autoPlay
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
