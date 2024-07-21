import React from "react";
import "./comments.css";
import { useState } from "react";
import DisplayComments from "./DisplayComments";

function Comments() {
  const [commentText, setCommentText] = useState("");

  const commentList = [
    {
      commentBody: "Hello",
      userCommented: "abc",
    },
    {
      commentBody: "Hello",
      userCommented: "abc",
    },
    {
      commentBody: "Hello",
      userCommented: "abc",
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleOnSubmit} className="comments_sub_form_comments">
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
      <div className="display_comments_container">
        <DisplayComments />
      </div>
    </>
  );
}

export default Comments;
