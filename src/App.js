import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header.js'
import './App.css';
import EnterNumber from './components/EnterNumber.js';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
        <p>Enter a number and click up or down. The total will increase or decrease by that amount.</p>
        <EnterNumber />
      </div>
    );
  }
}

export default App;
