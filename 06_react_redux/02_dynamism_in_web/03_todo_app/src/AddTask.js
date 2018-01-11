import React, { Component } from 'react';
import './App.css';
import Delete from './Delete'

function AddTask(props){
  return (
    <div key={Math.random()}>
      <p>{props.myTask.name} <input type="checkbox" onChange={()=>{props.isCheck(props.myTask)}}/></p>
      <Delete Checked={props.myTask.checked} handleDelete={props.handleDelete} myTask={props.myTask}/>
    </div>
  )

}

export default AddTask;
