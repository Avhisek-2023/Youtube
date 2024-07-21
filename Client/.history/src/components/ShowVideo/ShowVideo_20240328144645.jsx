import "./ShowVideo.css";
function ShowVideo({ vid }) {
  return (
    <>
      <div className="">
        <video src={`${vid?.video_src}`} className="video_Showvideo"></video>
      </div>
      <div className="video_description">
        <div className="Channel_logo_App">
          <div className="fstChar">
            <>{vid?.Uploader?.charAt(0).toUpperCase()}</>
          </div>
        </div>
        <div className="video_details">
          <p className="title_showvideo">title</p>
          <pre className="vid_views_UploadTime">1-1-2001</pre>
          <pre className="vid_views_UploadTime">
            5 views <div className="dot"></div> Video Uploaded 1 year ago
          </pre>
        </div>
      </div>
    </>
  );
}

export default ShowVideo;
