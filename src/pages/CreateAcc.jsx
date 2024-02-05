import { Link } from "react-router-dom";
import Header from "../components/Header";

function CreateAcc() {
  return (
    <div>
      <Header title={"Create Account"} />
      <label htmlFor="new-username">Username</label>
      <input id="new-username" type="email" />
      <label htmlFor="new-password">Password</label>
      <input id="new-password" type="password" />
      <Link to={"/"}>
        <button>Create Account</button>
      </Link>
    </div>
  );
}

export default CreateAcc;
