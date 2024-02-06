import Button from "../styleComponents/Button";
import StyledLink from "../styleComponents/Link";

function ArticleCard({ children }) {
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
        <p>{votes}</p>
        <Button>Like</Button>
      </div>
    </section>
  );
}
export default ArticleCard;
