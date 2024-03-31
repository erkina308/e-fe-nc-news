import StyledLink from "../styleComponents/Link";
import Img from "../styleComponents/Img";
import { patchArticleVotes } from "../../utils/api";

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

  const likeBtnRef = useRef();
  const dislikeBtnRef = useRef();
  const [vote, setVote] = useState(votes);

  function incrementVote(event) {
    event.preventDefault();
    setVote((currentVote) => currentVote + 1);
    patchArticleVotes(article_id, 1);
    if (likeBtnRef.current) {
      likeBtnRef.current.setAttribute("disabled", "disabled");
      dislikeBtnRef.current.setAttribute("disabled", "disabled");
    }
  }

  function decrementVote(event) {
    event.preventDefault();
    if (vote > 0) {
      setVote((currentVote) => currentVote - 1);
      patchArticleVotes(article_id, -1);
      if (dislikeBtnRef.current) {
        likeBtnRef.current.setAttribute("disabled", "disabled");
        dislikeBtnRef.current.setAttribute("disabled", "disabled");
      }
    }
  }

  return (
    <section>
      <div>
        <h2 className="article-titles">{title}</h2>
        <StyledLink to={`/api/articles/${article_id}`}>
          <img className="article-img" src={article_img_url} />
        </StyledLink>
      </div>
    </section>
  );
}
export default ArticleCard;
