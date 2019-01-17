import React, { Component } from 'react';

class CurrentTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalNum: 0,
        }
    }

    addToHistory = (event) => {
        event.preventDefault();
        console.log('In addToHistory');
        // let fixNumber = this.state.totalNum + this.props.appCurrentNumber;
        this.setState({
            totalNum: this.props.appCurrentNumber,
        }, () => {this.props.fromCurrentTotalToHistory(this.state.totalNum)});
    }

    render() {
        // console.log(`totalNum: ${this.state.totalNum}`);
        // console.log(`App current number: ${this.props.appCurrentNumber}`);
        
        return (
            <form onSubmit={this.addToHistory}>
                <h2>Current Total</h2>
                <p>{this.props.appCurrentNumber}</p>
                <button type="submit">Save</button>
            </form>
    );
  }
}

export default CurrentTotal;