import { useSearchParams } from "react-router-dom";
import { fetchArticles } from "../../utils/api";
import ArticleCard from "../cards/ArticleCard";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import ArticleDiv from "../styleComponents/ArticleDiv";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    fetchArticles(topic).then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>Page loading...</p>;
  return (
    <section>
      <Header title={"Latest Articles"} />
      <div>
        <ul>
          {articles.map((article) => {
            return (
              <div key={article.title}>
                <ArticleDiv key={`${article.article_id}${article.author}`}>
                  <ArticleCard>{article}</ArticleCard>
                </ArticleDiv>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
