import { Link } from "react-router-dom";
import Nav from "../styleComponents/Nav";
import List from "../styleComponents/Li";

function Navigation() {
  return (
    <div>
      <Nav>
        <ul>
          <List>
            <Link to={`/`}>Home</Link>
          </List>
          <List>
            <Link to={`/sign-in`}>Sign in</Link>
          </List>
          <List>
            <Link to={`/create-account`}>Create account</Link>
          </List>
        </ul>
      </Nav>
    </div>
  );
}

export default Navigation;
