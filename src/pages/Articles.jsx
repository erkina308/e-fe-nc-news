import { fetchArticles } from "../../utils/api";
import ArticleCard from "../cards/ArticleCard";
import CommentManager from "../components/CommentManager";
import Header from "../components/Header";
import { useState, useEffect } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentCount, setCommentCount] = useState(0);
  
  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Page loading...</p>;
  return (
    <section>
      <Header title={"Latest Articles"} />

      <div>
        <ul>
          {articles.map((article) => {
            return (
              <div key={article.title}>
                <div key={`${article.article_id}${article.author}`}>
                  <ArticleCard>{article}</ArticleCard>
                  <CommentManager
                    created_at={article.created_at}
                    article_id={article.article_id}
                    commentCount={commentCount}
                    setCommentCount={setCommentCount}
                  />
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
