import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App2(idade) {
    return (
      <div className="App">
        <header className="App-header">
          <p>App 2

              {idade}
          </p>
        </header>
      </div>
    );
}

export default App2;
