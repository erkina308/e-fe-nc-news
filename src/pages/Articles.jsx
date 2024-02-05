import { fetchArticles } from "../../utils/api";
import Article from "../cards/Article";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
    });
  }, []);
  console.log(articles, "<-- articles in articles");
  return (
    <section>
      <Navigation />
      <Header title={"Latest Articles"} />
      <div>
        <ul>
          {articles.map((article) => {
            return <Article></Article>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Articles;
