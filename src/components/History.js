import React, { Component } from 'react';

class History extends Component {
    constructor() {
        super();
        this.state = {
            countNum: '',
        };
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
                {historyArray}
            </div>
    );
  }
}

export default History;