import Header from "../components/Header";
import { postCommentByArticleId } from "../../utils/api";
import { useState } from "react";

export default function NewComment({ article_id }) {
  const [userInput, setUserInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    postCommentByArticleId(article_id, userInput, bodyInput);
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
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <label htmlFor="newComment">Comment</label>
        <input
          type="text"
          name="newComment"
          id="newComment"
          value={bodyInput}
          onChange={(event) => setBodyInput(event.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </section>
  );
}
