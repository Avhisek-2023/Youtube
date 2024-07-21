function ShowVideo({ vid }) {
  return (
    <>
      <div className="">
        <video src={`${vid?.video_src}`}></video>
      </div>
    </>
  );
}

export default ShowVideo;
