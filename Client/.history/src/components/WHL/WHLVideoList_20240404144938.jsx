import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

function WHLVideoList({ page, videoList }) {
  return (
    <>
      {videoList.map((e) => (
        <>
          <ShowVideoList />
        </>
      ))}
    </>
  );
}

export default WHLVideoList;
