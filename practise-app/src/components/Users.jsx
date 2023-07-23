import { useContext } from "react";
import User from "./User";
import { UsersContext } from "./UserContext";

const Users = () => {
  const { users, setUsers } = useContext(UsersContext);
  return (
    <section className="users">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;