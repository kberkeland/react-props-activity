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
      appCurrentNumber: 0,
      historyNumArray: [],
    }
  }

  fromEnterNumberToApp = (numIn) => {
    this.setState({
      appCurrentNumber: numIn + this.state.appCurrentNumber,
    }, () => {this.logFields()});
  }

  logFields = () => {
    const testOut = this.state.appCurrentNumber;
    console.log(`Test out = `, testOut);
  }

  fromCurrentTotalToHistory = (hisNumIn) => {
    this.setState({
      historyNumArray: [...this.state.historyNumArray, hisNumIn],
    });
  }

  fromHistoryToApp = () => {
    this.setState({
      historyNumArray: [],
    });  
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p>Enter a number and click up or down. The total will increase or decrease by that amount.</p>
        <EnterNumber fromEnterNumberToApp={this.fromEnterNumberToApp} />
        <CurrentTotal appCurrentNumber={this.state.appCurrentNumber} fromCurrentTotalToHistory={this.fromCurrentTotalToHistory}/>
        <History fromHistoryToApp={this.fromHistoryToApp} historyNumArray={this.state.historyNumArray} />
      </div>
    );
  }
}

export default App;
