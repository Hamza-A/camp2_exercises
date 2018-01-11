import React, { Component } from 'react';
import './App.css';
import DisplayList from './DisplayList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      myList: [],
      value: ""
    }
  }

  isCheck=(myTask, event)=>{
    let myTab = this.state.myList;
    let myIndex = myTab.indexOf(myTask);

    myTab.splice(myIndex, 1);
    myTab.splice(myIndex, 0, {name: myTask.name, checked: !myTask.checked});
    this.setState({myList: myTab});
  }

  handleDelete=(myTask, event)=>{
    let myTab = this.state.myList;
    let myIndex = myTab.indexOf(myTask);

    myTab.splice(myIndex, 1);
    this.setState({myList: myTab});

  }


  handleChange=(event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit=(event) => {
    event.preventDefault();
    let newList= this.state.myList;
    newList.push({name: this.state.value, checked: false});
    this.setState({myList: newList});
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
        <h3> What do you want to keep in mind? </h3>
          <input type="text" id="task" onChange={this.handleChange}></input>
          <input type="submit" value="add"></input>
        </form>
        <div>
         <DisplayList myList={this.state.myList} isCheck={this.isCheck} handleDelete={this.handleDelete}/>
        </div>
      </div>
    );
  }
}

export default App;
