import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { patchArticleVotes } from "../../utils/api";
import Button from "../styleComponents/Button";
import { useState } from "react";
import { useRef } from "react";
import Img from "../styleComponents/Img";

function ArticleByIdCard({ children }) {
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
        <h2>{title}</h2>
        <Img src={article_img_url} />
        <p>{body}</p>
        <p>{new Date(created_at).toLocaleDateString("en-GB")}</p>
        <div>
          <p>Likes: {vote}</p>
          <Button ref={likeBtnRef} onClick={incrementVote}>
            <BiSolidLike />
          </Button>
          <Button ref={dislikeBtnRef} onClick={decrementVote}>
            <BiSolidDislike />
          </Button>
        </div>
      </div>
    </section>
  );
}
export default ArticleByIdCard;
