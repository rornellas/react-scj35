import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import App1 from './App1'
import App2 from './App2.js'

function App() {

  const [idade, setIdade] =useState(0)
  const [name, setName] =useState("")

    return (
      <div className="App">
      <header className="App-header">
        <p>
          Olá!
          <App1 name={name} />
          <App2 idade={idade}/>
          <button onClick={()=> setIdade(idade + 1)}>click</button>
        </p>
      </header>
        </div>
    );

}

export default App;
