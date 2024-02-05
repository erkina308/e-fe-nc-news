import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Button from "../styleComponents/Button";
import StyledLink from "../styleComponents/Link";

export default function Homepage() {
  return (
    <section>
      <nav>
        <Navigation />
      </nav>
      <Header title={"Northcoders News"} />
      <StyledLink to={"/api/articles"}>
        <Button>Enter page</Button>
      </StyledLink>
    </section>
  );
}
