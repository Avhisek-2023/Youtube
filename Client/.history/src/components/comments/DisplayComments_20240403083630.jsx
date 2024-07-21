import React, { useState } from "react";
import "./comments.css";
function DisplayComments({ element }) {
  const [commentText, setCommentText] = useState("");
  const [Edit, setEdit] = useState(false);

  const handleEdit = (cmtId, cmtBdy) => {};

  return (
    <>
      {Edit ? (
        <>
          <form className="comments_sub_form_comments">
            <input
              type="text"
              onChange={(e) => {
                setCommentText(e.target.value);
              }}
              placeholder="Edit comment..."
              value={element.commentBody}
              className="comment_ibox"
            />
            <input
              type="submit"
              value="add"
              className="comment_add_btn_comments"
            />
          </form>
        </>
      ) : (
        <>
          <p className="comment_body">{element.commentBody}</p>
        </>
      )}
      <p className="user_comment">- {element.userCommented} commented</p>
      <p className="EditDelete_DisplayComment">
        <i
          onClick={() => {
            handleEdit(element._id, element.commentBody);
          }}
        >
          Edit
        </i>
        <i>Delete</i>
      </p>
    </>
  );
}

export default DisplayComments;
