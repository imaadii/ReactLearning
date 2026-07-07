const App = () => {
  let count = 0;

  const increase = () => {
    count++;
    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </>
  );
};

export default App;