import React, { Component } from 'react';

class CurrentTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalNum: '',
        }
    }

    addToHistory = (event) => {
        event.preventDefault();
        console.log('In addToHistory');
        this.setState({
            totalNum: this.props.appCurrentNumber,
        })
        this.props.sendToHistory(this.state.totalNum);
    }

    render() {
        console.log(`totalNum: ${this.state.totalNum}`)
        
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