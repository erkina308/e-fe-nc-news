import Button from "../styleComponents/Button";

function Article({ children }) {
  const { article_img_url, author, body, created_at, title, votes, topic } =
    children;
  return (
    <section>
      <div>
        <h2>{author}</h2>
        <img src={article_img_url} />
        <p>{title}</p>
        <p>{body}</p>
        <p>{created_at}</p>
        <p>{votes}</p>
        <Button>Like</Button>
      </div>
    </section>
  );
}
export default Article;
