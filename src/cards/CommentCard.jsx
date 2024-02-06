function CommentCard({ children }) {
  const { author, body, votes, comment_id, created_at } = children;
  return (
    <section>
      <div>
        <h2>{author}</h2>
        <p>{body}</p>
        <p>{created_at}</p>
        <p>{votes}</p>
      </div>
    </section>
  );
}

export default CommentCard;
