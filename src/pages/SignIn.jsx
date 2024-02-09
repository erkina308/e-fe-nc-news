import { useEffect, useState } from "react";
import { fetchUsers } from "../../utils/api";
import Header from "../components/Header";
import UserCard from "../cards/UserCard";
import { Li } from "../styleComponents/Li";

export default function SignIn() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((userData) => {
      setUsers(userData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Page loading...</p>;
  return (
    <div>
      <Header title={"Welcome back"} />
      <ul>
        {users.map((user) => {
          return (
            <Li key={user.username}>
              <UserCard loggedUser={user} />
            </Li>
          );
        })}
      </ul>
    </div>
  );
}
