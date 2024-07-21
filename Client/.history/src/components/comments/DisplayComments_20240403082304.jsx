import React from "react";
import "./comments.css";
function DisplayComments({ element }) {
  return (
    <>
      <p className="comment_body">{element.commentBody}</p>
      <p className="user_comment">- {element.userCommented} commented</p>
    </>
  );
}

export default DisplayComments;
