import React from "react";
import "./comments.css";

function Comments() {
  return (
    <>
      <form
        action="
    "
        className="comments_sub_form_comments"
      >
        <input
          type="text"
          placeholder="add comment..."
          className="comment_ibox"
        />
        <input type="submit" value="add" className="comment_add_btn_comments" />
      </form>
    </>
  );
}

export default Comments;
