import { fetchArticles } from "../../utils/api";
import ArticleCard from "../cards/ArticleCard";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Page loading...</p>;
  return (
    <section>
      <Navigation />
      <Header title={"Latest Articles"} />
      <div>
        <ul>
          {articles.map((article) => {
            return (
              <ArticleCard key={article.article_id}>{article}</ArticleCard>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
