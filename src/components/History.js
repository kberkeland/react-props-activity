import React, { Component } from 'react';

class History extends Component {
    constructor(props) {
        super(props);
        this.super = {
            test: '',
        }
    }

    deleteHistory = () => {
        this.props.fromHistoryToApp();
    }

    render() {
        const historyArray = [];
        for(let history of this.props.historyNumArray) {
            let numberList = (<p>{history}</p>);
            historyArray.push(numberList);
        }
        return (
            <div>
                <h2>History</h2>
                <button onClick={this.deleteHistory}>DELETE HISTORY</button>
                {historyArray}                
            </div>
    );
  }
}

export default History;