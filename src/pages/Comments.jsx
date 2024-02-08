import { fetchCommentsByArticleId } from "../../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "../cards/CommentCard";
import DeleteComment from "../components/DeleteComment";
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentData) => {
      setComments(commentData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Page loading...</p>;
  return (
    <section>
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => {
            return (
              <div key={comment.comment_id}>
                <ul>
                  <CommentCard>{comment}</CommentCard>
                  {user.username === comment.author ? (
                    <DeleteComment comment_id={comment.comment_id} />
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
