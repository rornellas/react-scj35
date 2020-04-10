import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App1(props) {
    return (
      <div className="App">
        <header className="App-header">
          <p>App 1
          
            {props.sobrenome}

          </p>
        </header>
      </div>
    );
}

export default App1;
