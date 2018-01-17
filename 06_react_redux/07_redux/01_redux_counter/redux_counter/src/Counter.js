import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

class Counter extends Component {
  increment =()=>{
    this.props.dispatch({type: "INCREMENT"});
  }

  decrement =()=>{
    this.props.dispatch({type: "DECREMENT"});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.decrement}>-</button>
          {this.props.count}
          <button onClick={this.increment}>+</button>
        </p>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
})
export default connect(mapStateToProps)(Counter);
