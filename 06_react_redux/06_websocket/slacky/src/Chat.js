import React, { Component } from 'react';
import './App.css';

function Chat(props){
  return (
    <div>
      {props.message.map(x =>
      (
        <p>
        {x.username}: {x.message}
        </p>
      )
    )}


    <form onSubmit={props.submitMessage}>
      <input type="text" id="message" onChange={props.handleChat}></input>
      <input type="submit" value="Publish"></input>
    </form>
    </div>

  );
}

export default Chat;
