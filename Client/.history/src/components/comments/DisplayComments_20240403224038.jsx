import React, { useState } from "react";
import "./comments.css";
function DisplayComments({ element }) {
  const [commentTBody, setCommentBody] = useState("");
  const [Edit, setEdit] = useState(false);

  const handleEdit = (cmtId, cmtBdy) => {
    setEdit(true);
    setCommentBody(cmtBdy);
  };

  return (
    <>
      {Edit ? (
        <>
          <form
            className="comments_sub_form_comments"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              onChange={(e) => {
                setCommentBody(e.target.value);
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
