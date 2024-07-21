import React from "react";

function ShowVideoList() {
  return (
    <div className="container_ShowVideoGrid">
      {vids?.map((e) => (
        <div key={e._id} className="video_box">
          <ShowVideo vid={e} />
        </div>
      ))}
    </div>
  );
}

export default ShowVideoList;
