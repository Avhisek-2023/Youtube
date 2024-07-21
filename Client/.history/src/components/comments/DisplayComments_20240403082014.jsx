import React from "react";

function DisplayComments({ element }) {
  return (
    <>
      <p className="comment_body">{element.commentBody}</p>
      <p className="user_comment">{element.userCommented}</p>
    </>
  );
}

export default DisplayComments;
