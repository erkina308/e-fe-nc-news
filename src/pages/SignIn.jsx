import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../styleComponents/Button";
export default function SignIn() {
  return (
    <div>
      <Header title={"Welcome back"} />
      <label htmlFor="username">Username</label>
      <input id="username" type="email" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" />
      <Link to={"/"}>
        <Button>Sign in</Button>
      </Link>
    </div>
  );
}
