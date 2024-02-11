import { NavLink } from "react-router-dom";
import Nav from "../styleComponents/Nav";
import NavContainer from "../styleComponents/NavContainer";
import NavElements from "../styleComponents/NavElements";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
function Navigation() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Nav>
        <NavContainer>
          <NavElements>
            <ul>
              <li>
                <NavLink to={`/`}>Home</NavLink>
              </li>
              <li>
                <NavLink to={`/api/articles`}>Articles</NavLink>
              </li>
              <li>
                <NavLink to={`/sign-in`}>Change user</NavLink>
              </li>
            </ul>
          </NavElements>
        </NavContainer>
      </Nav>
      <div>
        <p>Current user: {user.username}</p>
      </div>
    </div>
  );
}

export default Navigation;
