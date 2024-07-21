import "./ShowVideo.css";
function ShowVideo({ vid }) {
  return (
    <>
      <div className="">
        <video src={`${vid?.video_src}`} className="video_Showvideo"></video>
      </div>
      <div className="video_description">
        <div className="Channel_logo_App">
          <p>{vid?.Uploader?.charAt(0).toUppercase()}</p>
        </div>
      </div>
    </>
  );
}

export default ShowVideo;
