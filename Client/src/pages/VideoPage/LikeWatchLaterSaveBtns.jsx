import { BsThreeDots } from "react-icons/bs";
import "./LikeWatchLaterSaveBtns.css";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { RiHeartAddFill, RiShareForwardLine } from "react-icons/ri";
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import { useState } from "react";
function LikeWatchLaterSaveBtns() {
  const [saveVideo, setSaveVideo] = useState(true);
  const [DisLikeVideo, setDisLikeVideo] = useState(false);
  const [likeVideo, setLikeVideo] = useState(false);

  const handleSavedVideo = () => {
    if (saveVideo) {
      setSaveVideo(false);
    } else {
      setSaveVideo(true);
    }
  };
  const handleLikedVideo = () => {
    if (likeVideo) {
      setLikeVideo(false);
    } else {
      setLikeVideo(true);
    }
  };
  const handledisLikedVideo = () => {
    if (DisLikeVideo) {
      setDisLikeVideo(false);
    } else {
      setDisLikeVideo(true);
    }
  };
  return (
    <div className="btn_cont_videoPage">
      <div className="btn_videoPage">
        <BsThreeDots />
      </div>
      <div className="btn_videoPage">
        <div
          className="like_videoPage"
          onClick={() => {
            handleLikedVideo();
          }}
        >
          {likeVideo ? (
            <>
              <AiFillLike size={22} className="btn_VideoPage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btn_VideoPage" />
            </>
          )}
          <b>1</b>
        </div>
        <div
          className="like_videoPage"
          onClick={() => {
            handledisLikedVideo();
          }}
        >
          {DisLikeVideo ? (
            <>
              <AiFillDislike size={22} className="btn_VideoPage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btn_VideoPage" />
            </>
          )}
          <b>DISLIKE</b>
        </div>
        <div className="like_videoPage">
          <>
            <RiHeartAddFill size={22} className="btn_VideoPage" />
            <b>Thanks</b>
          </>
        </div>
        <div className="like_videoPage">
          <>
            <RiShareForwardLine size={22} className="btn_VideoPage" />
            <b>Share</b>
          </>
        </div>

        <div
          className="like_videoPage"
          onClick={() => {
            handleSavedVideo();
          }}
        >
          {saveVideo ? (
            <>
              <MdOutlinePlaylistAdd size={22} className="btn_VideoPage" />
              <b>Save</b>
            </>
          ) : (
            <>
              <MdOutlinePlaylistAddCheck size={22} className="btn_VideoPage" />
              <b>Saved</b>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LikeWatchLaterSaveBtns;
