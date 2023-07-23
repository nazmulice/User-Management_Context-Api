import { useContext, useState } from "react";
import { UsersContext } from "./UserContext";

const NewUser = () => {
  const { users, setUsers } = useContext(UsersContext);
  const [username, setUsername] = useState("");
  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUsername("");
  };
  return (
    <div className="btnSubmit">
      <h1>User Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
                  name="username"
                  placeholder="Enter username"
          value={username}
          onChange={handleUserChange}
        />{" "}
        <br /> <br />
        <button type="submit" className="btn btn-success">
          Add User
        </button>
          </form>
          
    </div>
  );
};

export default NewUser;