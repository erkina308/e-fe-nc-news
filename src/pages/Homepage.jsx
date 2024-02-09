import Header from "../components/Header";
import Button from "../styleComponents/Button";
import StyledLink from "../styleComponents/Link";

export default function Homepage() {
  return (
    <section>
      <Header title={"Northcoders News"} />
      <StyledLink to={"/api/articles"}>
        <Button>Enter page</Button>
      </StyledLink>
    </section>
  );
}
