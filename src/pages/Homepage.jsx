import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <section>
      <nav>
        <Navigation />
      </nav>
      <Header title={"Northcoders News"} />
      <Link to={"/api/articles"}>
        <button>Enter page</button>
      </Link>
    </section>
  );
}
