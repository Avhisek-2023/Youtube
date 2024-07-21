function ShowVideo({ vid }) {
  return (
    <>
      <div className="">
        <video src={`${vid?.video_src}`} />
      </div>
    </>
  );
}

export default ShowVideo;
