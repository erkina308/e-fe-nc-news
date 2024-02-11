import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import Header from "../components/Header";
import ArticleByIdCard from "../cards/ArticleByIdCard";
import Button from "../styleComponents/Button";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import ErrorPage from "./ErrorPage";
import CommentManager from "../components/CommentManager";

function ArticleById() {
  const [error, setError] = useState(null);
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentCount, setCommentCount] = useState(0);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [article_id]);

  if (error) {
    return (
      <ErrorPage
        errMessage={error.err.response.data.msg}
        errStatusCode={error.err.response.status}
      />
    );
  }

  if (isLoading) return <p>Page loading...</p>;
  return (
    <section>
      <Header title={"Selected Article"} />
      <Link to={"/api/articles"}>
        <Button>
          <IoIosArrowDropleftCircle />
        </Button>
      </Link>
      <div>
        <ul>
          <ArticleByIdCard key={article_id}>{article}</ArticleByIdCard>
          <CommentManager
            created_at={article.created_at}
            article_id={article.article_id}
            commentCount={commentCount}
            setCommentCount={setCommentCount}
          />
        </ul>
      </div>
    </section>
  );
}

export default ArticleById;
