import React from "react";
import "./comments.css";
import { useState } from "react";

function Comments() {
  const [commentText, setCommentText] = useState("");
  return (
    <>
      <form
        action="
    "
        className="comments_sub_form_comments"
      >
        <input
          type="text"
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
          placeholder="add comment..."
          className="comment_ibox"
        />
        <input type="submit" value="add" className="comment_add_btn_comments" />
      </form>
    </>
  );
}

export default Comments;
