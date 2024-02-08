import { deleteCommentById } from "../../utils/api";
import DeleteButton from "../styleComponents/DeleteButton";
import { useState } from "react";

export default function DeleteComment({ comment_id }) {
  const [isDeleted, setIsDeleted] = useState(false);
  function handleDelete(event) {
    setIsDeleted(true);
    event.preventDefault();
    deleteCommentById(comment_id);
  }

  return isDeleted ? (
    <p>Comment deleted</p>
  ) : (
    <DeleteButton onClick={handleDelete}>Delete comment</DeleteButton>
  );
}
