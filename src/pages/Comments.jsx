import CommentCard from "../cards/CommentCard";
import DeleteCommentBtn from "../components/DeleteCommentBtn";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Comments({ comments }) {
  const { user } = useContext(UserContext);
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
                    <DeleteCommentBtn comment_id={comment.comment_id} />
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
