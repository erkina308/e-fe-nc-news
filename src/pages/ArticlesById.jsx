import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ArticleCard from "../cards/ArticleCard";
import Comments from "../pages/Comments";

export default function ArticleById() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Page loading...</p>;
  return (
    <section>
      <Navigation />
      <Header title={"Selected Article"} />
      <div>
        <ul>
          <ArticleCard key={article.article_id}>{article}</ArticleCard>
          <Comments article_id={article.article_id} />
        </ul>
      </div>
    </section>
  );
}
