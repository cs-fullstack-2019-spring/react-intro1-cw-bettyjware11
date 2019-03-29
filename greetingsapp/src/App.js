import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SayHowdy from './SayHowdy';
import SayHello from './SayHello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <SayHowdy/>
          <SayHello/>
        </header>
      </div>
    );
  }
}

export default App;
