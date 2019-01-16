import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header.js'
import './App.css';
import EnterNumber from './components/EnterNumber.js';
import CurrentTotal from './components/CurrentTotal.js';
import History from './components/History.js';

class App extends Component {

  constructor() {
    super()

    this.state = {
      appCurrentNumber: '',
      historyNumArray: [],
    }
  }

  changeAppNumber = (numIn) => {
    this.setState({
      appCurrentNumber: numIn,
    });
  }

  sendToHistory = (hisNumIn) => {
    this.setState({
      historyNumArray: [...this.state.historyNumArray, hisNumIn],
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p>Enter a number and click up or down. The total will increase or decrease by that amount.</p>
        <EnterNumber changeAppNumber={this.changeAppNumber} />
        <CurrentTotal appCurrentNumber={this.state.appCurrentNumber} sendToHistory={this.sendToHistory}/>
        <History historyNumArray={this.state.historyNumArray} />
      </div>
    );
  }
}

export default App;
