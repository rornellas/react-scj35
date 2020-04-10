import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App2(props) {
    return (
      <div className="App">
        <header className="App-header">
          <p>App 2

              {props.idade}
          </p>
        </header>
      </div>
    );
}

export default App2;
