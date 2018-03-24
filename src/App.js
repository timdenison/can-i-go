import React, { Component } from 'react';
import './App.css';

import * as sensor from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { occupied: 0 };
  }

  componentWillMount(){
    sensor.canIGo().then((response) => {
      this.setState({occupied: response});
    });
  }
  render() {
    const bgColor = this.state.occupied ? 'red' : 'green';
    return (
      <div className="App">
      <style>{`body { background-color: ${bgColor}; }`}</style>
        <header className="App-header">
          <h1 className="App-title">Can You Go?</h1>
        </header>
          <div className="status">
            {this.state.occupied ? 'NO!!' : 'GO NOW!!' }
          </div>
      </div>
    );
  }
}

export default App;
