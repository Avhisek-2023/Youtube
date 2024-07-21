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
              autoPlay
              //   loop
            ></video>
            <div className="video_details_videopage">
              <div className="video_btns_title_videoPage_cont">
                <p className="video_title_videopage">Title</p>
                <div className="views_date_btns_videoPage">
                  <div className="views_videopage">
                    5 views <div className="dot"></div> uploaded 1 year ago
                  </div>
                </div>
              </div>
              <div className="channel_details_videoPage">
                <b className="channel_logo_videopage">
                  <p>C</p>
                </b>
                <p className="channel_name_videoPage">Channel name </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
