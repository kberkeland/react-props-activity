import React, { Component } from 'react';

class EnterNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNum: '',
        };
    }

    onUpClick = (event) => {
        let newNumber = Number(this.state.currentNum) + 1;
        // console.log(event.target.value);
        // console.log(newNumber);
        this.setState({
            currentNum: newNumber,
        });

        this.props.changeAppNumber(this.state.currentNum);
    };

    onDownClick = (event) => {
        let newNumber = Number(this.state.currentNum) - 1;
        // console.log(event.target.value);
        // console.log(newNumber);
        this.setState({
            currentNum: newNumber,
        });

        this.props.changeAppNumber(this.state.currentNum);
    };

    currentNumChange = (event) => {
        this.setState({
            currentNum: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.onUpClick}>UP</button>
                <input onChange={this.currentNumChange} />
                <button onClick={this.onDownClick}>DOWN</button>
                <p>{this.state.currentNum}</p>
            </div>
    );
  }
}

export default EnterNumber;