import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import App1 from './App1'
import App2 from './App2.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          <App1 />
          <App2 />
        </p>
      </header>
        </div>
    );
  }
}

export default App;
