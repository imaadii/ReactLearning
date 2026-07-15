import { useEffect, useState } from "react";

const CounterEffect = () => {

    const [count, setCount] = useState(0);
    const [value, setvalue] = useState(0);

    useEffect(() => {
      console.log("This will run whenever count value changes")
    }, [count]);

  return (
    <div>
      <h1>Count</h1>
      <p>{count}</p>
      <p>{value}</p>
      <br />

      <button onClick={() => setCount(prev => prev+1)}>Increase</button>
      <button onClick={() => setvalue(prev => prev+1)}>Increase Value</button>

      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
};

export default CounterEffect;