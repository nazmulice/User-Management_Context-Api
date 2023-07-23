import { useContext } from "react";
import { UserData } from "../UserContext";

const About2 = () => {
  const data = useContext(UserData);
  console.log(data);
  return (
    <div>
          <h1>Age: {data.age} </h1>
          <h2>Name: {data.name} </h2>
    </div>
  );
};

export default About2;
