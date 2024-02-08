import { deleteCommentById } from "../../utils/api";
import DeleteButton from "../styleComponents/DeleteButton";

export default function DeleteComment({ comment_id }) {
  function handleDelete(event) {
    event.preventDefault();
    deleteCommentById(comment_id);
  }
  return <DeleteButton onClick={handleDelete}>Delete comment</DeleteButton>;
}
