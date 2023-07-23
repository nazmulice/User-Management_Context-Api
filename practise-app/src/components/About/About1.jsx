import About2 from "./About2";
import { useContext } from "react";
import { UserData } from "../UserContext";

const About1 = () => {
  const data = useContext(UserData);
  
  return (
    <div>
      <h1>Age: {data.age} </h1>
      <h2>Name: {data.name} </h2>
    </div>
  );
};

export default About1;
