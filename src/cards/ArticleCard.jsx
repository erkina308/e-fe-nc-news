import StyledLink from "../styleComponents/Link";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { patchArticleVotes } from "../../utils/api";
import Button from "../styleComponents/Button";
import { useState } from "react";
import { useRef } from "react";

function ArticleCard({ children }) {
  const {
    article_img_url,
    author,
    body,
    created_at,
    title,
    votes,
    article_id,
  } = children;

  const btnRef = useRef();
  const [vote, setVote] = useState(votes);

  function incrementVote(event) {
    event.preventDefault();
    setVote((currentVote) => currentVote + 1);
    patchArticleVotes(article_id, 1);
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }
  }

  function decrementVote(event) {
    event.preventDefault();
    setVote((currentVote) => currentVote - 1);
    patchArticleVotes(article_id, -1);
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
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
        <div>
          <p>{vote}</p>
          <Button ref={btnRef} onClick={incrementVote}>
            <BiSolidLike />
          </Button>
          <Button ref={btnRef} onClick={decrementVote}>
            <BiSolidDislike />
          </Button>
        </div>
      </div>
    </section>
  );
}
export default ArticleCard;
