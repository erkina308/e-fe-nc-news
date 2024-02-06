import Button from "../styleComponents/Button";
import StyledLink from "../styleComponents/Link";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { patchArticleVotes } from "../../utils/api";
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
    topic,
    article_id,
  } = children;
  function incrementVote() {
    console.log("increment");
    patchArticleVotes(article_id, 1).then((data) => {
      setVote((currentVote) => currentVote + 1);
    });
  }
  console.log(vote, "<-- vote in article card");
  function decrementVote() {
    console.log("decrement");
    patchArticleVotes(article_id, -1);
  }

  return (
    <section>
      <div>
        <h2>{author}</h2>
        <StyledLink to={`/api/articles/${article_id}`}>
          <img src={article_img_url} />
        </StyledLink>
        <p>{title}</p>
        <p>{body}</p>
        <p>{created_at}</p>
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
