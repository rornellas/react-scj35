import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import App1 from './App1'
import App2 from './App2.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name : 'Moir',
      sobrenome: 'Moivre'
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          App {this.state.name}
          <App1 name={this.state} />
          <App2 name={this.state}/>
        </p>
      </header>
        </div>
    );
  }
}

export default App;
