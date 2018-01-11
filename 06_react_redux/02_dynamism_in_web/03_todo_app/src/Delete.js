import React, { Component } from 'react';

function Delete(props){
 if (props.Checked === true){
   return (
     <button onClick={() => props.handleDelete(props.myTask)}>Delete</button>
   )
 } else {
   return "";
 }
}


export default Delete;
