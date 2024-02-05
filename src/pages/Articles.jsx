import { fetchArticles } from "../../utils/api";
import Article from "../cards/Article";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

export default function Articles() {
  const [page, setPage] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      setPage(data);
    });
  }, []);

  if (page.articles !== undefined) {
    return (
      <section>
        <Navigation />
        <Header title={"Latest Articles"} />
        <div>
          <ul>
            {page.articles.map((article) => {
              return <Article key={article.article_id}>{article}</Article>;
            })}
          </ul>
        </div>
      </section>
    );
  } else {
    return <p>Page loading...</p>;
  }
}
