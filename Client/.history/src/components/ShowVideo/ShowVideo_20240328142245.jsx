import "./ShowVideo.css";
function ShowVideo({ vid }) {
  return (
    <>
      <div className="">
        <video src={`${vid?.video_src}`} className="video_Showvideo"></video>
      </div>
    </>
  );
}

export default ShowVideo;
