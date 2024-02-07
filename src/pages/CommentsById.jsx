import { fetchCommentsByArticleId } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../cards/CommentCard";

export default function CommentsById() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

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
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
