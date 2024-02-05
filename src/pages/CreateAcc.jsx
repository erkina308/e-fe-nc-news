import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../styleComponents/Button";

function CreateAcc() {
  return (
    <div>
      <Header title={"Create Account"} />
      <label htmlFor="new-username">Username</label>
      <input id="new-username" type="email" />
      <label htmlFor="new-password">Password</label>
      <input id="new-password" type="password" />
      <Link to={"/"}>
        <Button>Create Account</Button>
      </Link>
    </div>
  );
}

export default CreateAcc;
