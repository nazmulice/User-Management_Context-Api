import { useState } from "react";
import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/main.css";
import NewUser from "./components/NewUser";
import { UsersContext } from "./components/UserContext";

function App() {
  const [users, setUsers] = useState([
    { id: 11, username: "Rakibul Islam" },
    { id: 12, username: "Nazmul Hasan" },
    { id: 13, username: "Rasel Mahmud" },
    { id: 14, username: "Tanvir Ahmed" },
    { id: 15, username: "Dulal Hossain" },
  ]);
  

  return (
    <div className="container">
      <UsersContext.Provider value={{users, setUsers}}>
        <NewUser /> <hr />
        <Users  />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
