import React, { useState } from 'react';
import './App.css';

function App() {

  let currentTime = new Date().toLocaleTimeString();
  const [time, setCount] = useState();

  const getTime = () => {
     currentTime = new Date().toLocaleTimeString();
     setCount(currentTime);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>{time}</h1>
      <button class="button" onClick={getTime}>Get time</button>
      </header>
    </div>
  );
}

export default App;
