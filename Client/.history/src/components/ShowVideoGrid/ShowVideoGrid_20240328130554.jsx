function ShowVideoGrid({ vids }) {
  return (
    <div className="container_ShowVideoGrid">
      {vids.map((e) => (
        <div key={e._id} className="video_box"></div>
      ))}
    </div>
  );
}

export default ShowVideoGrid;
