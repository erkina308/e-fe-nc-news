import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav className="navBar">
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
      </nav>
    </div>
  );
}
