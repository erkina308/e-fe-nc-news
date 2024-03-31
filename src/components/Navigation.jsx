import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
function Navigation() {
  const { user } = useContext(UserContext);

  return (
    <div className="navbar-container">
      <div className="particle-logo">
        <h1 className="particle">
          <Link to={"/"}>Particle</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/api/articles"}>Articles</Link>
        </li>
        <li>
          <Link to={"/sign-in"}>Change user</Link>
        </li>
      </ul>
    </div>

    // <div>
    //   <Nav>
    //     <NavContainer>
    //       <NavElements>
    //         <ul>
    //           <li>
    //             <NavLink to={`/`}>Home</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to={`/api/articles`}>Articles</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to={`/sign-in`}>Change user</NavLink>
    //           </li>
    //         </ul>
    //       </NavElements>
    //     </NavContainer>
    //   </Nav>
    //   <div>
    //     <p>Current user: {user.username}</p>
    //   </div>
    // </div>
  );
}

export default Navigation;
