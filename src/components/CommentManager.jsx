import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../../utils/api";
import Expandable from "../components/Expandable";
import Comments from "../pages/Comments";
import NewComment from "../pages/NewComment";
import ExpandablePost from "../components/ExpandablePost";

export default function CommentManager({
  article_id,
  commentCount,
  setCommentCount,
}) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentData) => {
      setComments(commentData);
      setIsLoading(false);
    });
  }, [article_id, commentCount]);

  return (
    <section>
      <div>
        <ExpandablePost>
          <NewComment
            comments={comments}
            setComments={setComments}
            article_id={article_id}
            setCommentCount={setCommentCount}
            commentCount={commentCount}
          />
        </ExpandablePost>
      </div>
      <Expandable>
        {isLoading ? (
          <p>Comments loading...</p>
        ) : (
          <Comments
            comments={comments}
            article_id={article_id}
          />
        )}
      </Expandable>
    </section>
  );
}
