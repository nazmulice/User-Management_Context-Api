import About1 from "../About/About1";
import About2 from "../About/About2";
import { UserData } from "../UserContext";

let gs = {
  name: "Rasel",
  age: 27,
};
const Home2 = () => {
    return (
      <div>
        <UserData.Provider value={gs}>
          <About2 />
          <About1 />
        </UserData.Provider>
      </div>
    );
};

export default Home2;