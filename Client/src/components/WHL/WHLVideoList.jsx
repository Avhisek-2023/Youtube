import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

function WHLVideoList({ page, videoList }) {
  return (
    <>
      {videoList.map((e) => (
        <>
          <ShowVideoList videoId={e._id} key={e._id} />
        </>
      ))}
    </>
  );
}

export default WHLVideoList;
