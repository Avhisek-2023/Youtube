import "./ShowVideo.css";
function ShowVideo({ vid }) {
  return (
    <>
      <div className="">
        <video src={`${vid?.video_src}`} className="video_Showvideo"></video>
      </div>
      <div className="video_description">
        <div className="Channel_logo_App">
          <p>{vid?.Uploader}</p>
        </div>
      </div>
    </>
  );
}

export default ShowVideo;
