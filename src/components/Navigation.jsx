import { Link } from "react-router-dom";
import Nav from "../styleComponents/Nav";
import NavContainer from "../styleComponents/NavContainer";
import NavElements from "../styleComponents/NavElements";

function Navigation() {
  return (
    <Nav>
      <NavContainer>
        <NavElements>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/sign-in`}>Sign in</Link>
            </li>
            <li>
              <Link to={`/create-account`}>Create account</Link>
            </li>
          </ul>
        </NavElements>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;
