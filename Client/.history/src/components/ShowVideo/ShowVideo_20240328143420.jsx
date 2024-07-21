import "./ShowVideo.css";
function ShowVideo({ vid }) {
  return (
    <>
      <div className="">
        <video src={`${vid?.video_src}`} className="video_Showvideo"></video>
      </div>
      <div className="video_description">
        <div className="channel_logo_app">
          <div className="fstChar">
            <>{vid?.Uploader?.charAt(0).toUpperCase()}</>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowVideo;
