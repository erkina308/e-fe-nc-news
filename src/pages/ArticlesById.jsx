import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ArticleCard from "../cards/ArticleCard";
import Comments from "../pages/Comments";
import ExpandablePost from "../components/ExpandablePost";
import NewComment from "./NewComment";
import Button from "../styleComponents/Button";
import { IoIosArrowDropleftCircle } from "react-icons/io";

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
      <Link to={'/api/articles'}>
        <Button>
          <IoIosArrowDropleftCircle />
        </Button>
      </Link>
      <div>
        <ul>
          <ArticleCard key={article_id}>{article}</ArticleCard>
          <Comments article_id={article_id} />
          <div>
            <ExpandablePost>
              <NewComment article_id={article_id} />
            </ExpandablePost>
          </div>
        </ul>
      </div>
    </section>
  );
}
