import CommentCard from "../cards/CommentCard";
import DeleteButton from "../styleComponents/DeleteButton";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteCommentById } from "../../utils/api";

function Comments({ comments, setComments }) {
  const { user } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
  function handleDelete(id, e) {
    e.preventDefault();
    deleteCommentById(id);
    const newComments = comments.filter((comment) => {
      return comment.comment_id !== id;
    });
    setIsDeleted(true);
    setComments(newComments);
  }

  return (
    <section>
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => {
            return (
              <div key={`${comment.author}${comment.comment_id}`}>
                <ul>
                  <CommentCard>{comment}</CommentCard>
                  {user.username === comment.author ? (
                    <DeleteButton
                      onClick={(e) => handleDelete(comment.comment_id, e)}
                    >
                      Delete comment
                    </DeleteButton>
                  ) : null}
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Comments;
