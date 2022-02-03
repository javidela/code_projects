import React from 'react';

function App(){
  const sayHello = () => {
    console.log("hello");
  };

  const counter = 0;

  return(
    <div>
      <h1>Hello Xavi</h1>
      <button onClick = {sayHello}>Hello</button>
    </div>
  );
}

export default App

// min 18:40