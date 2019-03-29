import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BankAccount from './BankAccount';
import CustomerName from './CustomerName';
import Balance from './Balance';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BankAccount/>
        </header>
      </div>
    );
  }
}

export default App;
