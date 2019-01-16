import React, { Component } from 'react';

class History extends Component {
    constructor() {
        super();
        this.state = {
            countNum: '',
        };
    }
    render() {
        return (
            <form>
                <button>UP</button>
                <input />
                <button>DOWN</button>
            </form>
    );
  }
}

export default History;