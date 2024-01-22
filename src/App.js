import React from "react";

function App() {
  let result = "";
  for(let i = 0; i<10;i++){
    result += `${i} `;
  }
  return <div>Hello World, the numbers are {result}</div>;
}

export default App;
