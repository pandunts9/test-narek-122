import React, { useState } from "react";

const { log } = console;

function App() {
  const [count, setCount] = useState(0); // return [variable, setVariable]
  log(count);

  const addCount = () => {
    setCount(count + 1);
    // setCount((prevSate) => {
    //   return prevSate + 1;
    // });

    // log(count);
  };

  return (
    <div>
      <button onClick={addCount}>+</button>
      <input value="5" />
      <p>{count}</p>
    </div>
  );
}

export default App;
