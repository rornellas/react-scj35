import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import NegociacaoForm from './js/app/components/NegociacaoForm'

function App() {

  const [idade, setIdade] =useState(0)
  const [name, setName] =useState("")

    return (
      <div className="App">
      <header className="App-header">
        <NegociacaoForm />
      </header>
        </div>
    );

}

export default App;
