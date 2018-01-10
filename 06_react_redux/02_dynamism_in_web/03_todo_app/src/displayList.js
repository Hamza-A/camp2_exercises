import React, { Component } from 'react';
import './App.css';

class DisplayList extends Component {
  constructor(props){
    super(props)
    this.state= {
      myList: props.myList,
    }
  }

  isCheck=(event)=>{
    this.state.checked===false
    ? this.setState.checked = true
    : this.setState.checked = false;
  }

  render() {
    return (
      <div className="App">
      {this.state.myList.map(x =>
        (
          <div key={Math.random()}>
            <p>{x.name} <input type="checkbox" onChange={this.isChek}/></p>
          </div>
        )
      )
      }
      </div>

    );
  }
}

export default DisplayList;
