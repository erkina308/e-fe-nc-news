import { fetchCommentsByArticleId } from "../../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "../cards/CommentCard";
import DeleteComment from "../components/DeleteComment";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
                  <DeleteComment comment_id={comment.comment_id} />
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
