import { fetchCommentsByArticleId } from "../../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "../cards/CommentCard";

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
        <ul>
          {comments.map((comment) => {
            return (
              <div key={comment.comment_id}>
                <ul>
                  <CommentCard>{comment}</CommentCard>
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
