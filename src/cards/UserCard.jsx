import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Button from "../styleComponents/Button";

export default function UserCard({ loggedUser }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>{loggedUser.username}</h2>
      {loggedUser.username !== user.username ? (
        <Button
          onClick={() => {
            setUser(loggedUser);
          }}
        >
          Login
        </Button>
      ) : null}
    </div>
  );
}
