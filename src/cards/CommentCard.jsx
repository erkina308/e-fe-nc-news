function CommentCard({ children }) {
  const { author, body, votes, comment_id, created_at } = children;
  return (
    <section>
      <div key={comment_id}>
        <h3 key={author}>{author}</h3>
        <p>{body}</p>
        <p>{new Date(created_at).toLocaleDateString("en-GB")}</p>
        <p>Likes: {votes}</p>
      </div>
    </section>
  );
}

export default CommentCard;
