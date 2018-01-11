import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';

 function DisplayList(props) {
    return (

      props.myList.map(x =>
        (
          <div className="App">
            <AddTask myTask={x} isCheck={props.isCheck} handleDelete={props.handleDelete}/>
          </div>
        )
      )


    );
  }

export default DisplayList;
