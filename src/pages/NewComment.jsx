import Header from "../components/Header";
import { postCommentByArticleId } from "../../utils/api";
import { useState } from "react";
import Button from "../styleComponents/Button";

function NewComment({ article_id }) {
  const [error, setError] = useState(null);
  const [isPosted, setIsPosted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setButtonDisabled(true);
    setUserInput("");
    setBodyInput("");
    postCommentByArticleId(article_id, userInput, bodyInput)
      .then(() => {
        setIsPosted(true);
        setButtonDisabled(true);
      })
      .then(() => {
        setButtonDisabled(false);
      })
      .catch((err) => {
        setError({ err });
        setButtonDisabled(false);
      });
  }

  return (
    <section>
      <Header title={"New comment"} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="on"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          required
        />
        <label htmlFor="newComment">Comment</label>
        <textarea
          name="newComment"
          id="newComment"
          value={bodyInput}
          onChange={(event) => setBodyInput(event.target.value)}
          required
        />
        <Button disabled={buttonDisabled} type="submit">
          Post
        </Button>
        {error ? <p>Incorrect username</p> : null}
        {isPosted && !error ? <p>Comment posted</p> : null}
      </form>
    </section>
  );
}

export default NewComment;
