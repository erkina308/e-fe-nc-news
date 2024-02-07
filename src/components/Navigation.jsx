import { NavLink } from "react-router-dom";
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
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/sign-in`}>Sign in</NavLink>
            </li>
            <li>
              <NavLink to={`/create-account`}>Create account</NavLink>
            </li>
          </ul>
        </NavElements>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;
