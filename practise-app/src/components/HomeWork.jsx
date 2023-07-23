import { useEffect, useState } from "react";
 let data = ["NAZMUL", "MOMINUL", "ASAD", "RAKIB"];
const HomeWork = () => {
   
    const [count, setCount] = useState(0);
    const [name, setName] = useState(data);
    console.log(data);
    const handleCount = () => {
        if (count < data.length - 1) {
            setCount(count + 1);
        } else {
            setCount(count - count);
        }
    }
    useEffect(() => {
            setName(data[count])
    }, [count])
    
    return (
      <div>
        <h1>Name : {name}</h1>
        <button onClick={handleCount}>Change</button>
      </div>
    );
};

export default HomeWork;