import { useContext } from "react";
import { UsersContext } from "./UserContext";

const User = ({ user }) => {
    const { users, setUsers } = useContext(UsersContext);
    const { id, userName } = user;
    
    const handleDelete = (id) => {
        const index = users.findIndex((user) => user.id === id);
        if (index !== -1) {
            const newUsers = users.slice();
            newUsers.splice(index, 1);
            setUsers(newUsers);
        }
  };
    
  return (
    <div>
      <ul className="user bg-success text-white">
        <h5>Id: {user.id}</h5>
        <h3>Name : {user.username}</h3>
        <button className="btn btn-warning " onClick={() => handleDelete(id)}>
          Delete
        </button>
      </ul>
    </div>
  );
};

export default User;