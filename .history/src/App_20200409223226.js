import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import NegociacaoForm from './js/app/components/NegociacaoForm.js'

function App() {

  const [idade, setIdade] =useState(0)
  const [name, setName] =useState("")

    return (
      <div className="App">
      <NegociacaoForm />
        </div>
    );

}

export default App;
