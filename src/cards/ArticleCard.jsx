import Button from "../styleComponents/Button";
import StyledLink from "../styleComponents/Link";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
// import { patchArticleVotes } from "../../utils/api";
import { useState } from "react";

function ArticleCard({ children }) {
  const [vote, setVote] = useState(0);
  const {
    article_img_url,
    author,
    body,
    created_at,
    title,
    votes,
    article_id,
  } = children;
  function incrementVote() {
    setVote((currentVote) => currentVote + 1);
    // patchArticleVotes(article_id, 1).then((data) => {
    // });
  }

  function decrementVote() {
    if (vote > 0) {
      setVote((currentVote) => currentVote - 1);
    }
  }

  return (
    <section>
      <div>
        <h3>{author}</h3>
        <StyledLink to={`/api/articles/${article_id}`}>
          <img src={article_img_url} />
        </StyledLink>
        <p>{title}</p>
        <p>{body}</p>
        <p>{new Date(created_at).toLocaleDateString("en-GB")}</p>
        <p>{vote}</p>
        <div>
          <Button onClick={incrementVote}>
            <BiSolidLike />
          </Button>
          <Button onClick={decrementVote}>
            <BiSolidDislike />
          </Button>
        </div>
      </div>
    </section>
  );
}
export default ArticleCard;
