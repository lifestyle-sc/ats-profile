import React from 'react';
import './App.css';
import data from './mocks/user_data.json';

function App() {
  const getData = () => {
    console.log(data.candidates);
  }
  return (
    <div className="App">
      <h1>Hello world.</h1>
      <button onClick={getData}>Click Me</button>
    </div>
  );
}

export default App;
