import vid from "../../components/video/vid.mp4";
import "./VideoPage.css";
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
              //   autoPlay
            ></video>
            <div className="video_details_videopage">
              <div className="video_btns_title_videoPage_cont">
                <p className="video_title_videopage">Title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
