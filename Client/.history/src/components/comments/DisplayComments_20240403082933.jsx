import React, { useState } from "react";
import "./comments.css";
function DisplayComments({ element }) {
  const [commentText, setCommentText] = useState("");
  const [Edit, setEdit] = useState(false);
  return (
    <>
      {Edit ? <></> : <></>}
      <p className="comment_body">{element.commentBody}</p>
      <p className="user_comment">- {element.userCommented} commented</p>
      <p className="EditDelete_DisplayComment">
        <i>Edit</i>
        <i>Delete</i>
      </p>
    </>
  );
}

export default DisplayComments;
