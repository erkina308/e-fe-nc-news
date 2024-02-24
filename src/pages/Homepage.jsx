import Header from "../components/Header";
import Button from "../styleComponents/Button";
import StyledLink from "../styleComponents/Link";

export default function Homepage() {
  return (
    <section>
      <Header title={"Particle"} />
      <StyledLink className="homepageLink" to={"/api/articles"}>
        <Button className="homepageButton">Enter page</Button>
      </StyledLink>
    </section>
  );
}
