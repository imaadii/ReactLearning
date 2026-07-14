import {useState} from 'react';


const Counter = () => {

    const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>


      <button style= {{backgroundColor: 'lightgreen'}} onClick={
        () => {
            setCount(prev => prev + 1)
        }
      }>Increment</button>

      <button style={{margin: '10px', backgroundColor: 'lightcoral'}} onClick={
        () => {
            (count > 0) && setCount(prev => prev - 1)
        }
      }>Decrement</button>
    </>
  );
};

export default Counter;