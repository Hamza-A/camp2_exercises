import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat';
import Username from './Username';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username : "",
      isLogged : false,
      message : [{username: "Slacky Bot", message: "let start a new conversation"}],
      addMessage : "",
      addUser : ""
    }
  }

  componentDidMount() {
    // We open a connection from the client, related to the server
    const ws = new WebSocket("ws://localhost:4000");

    // What to do when we receive a message?
    ws.onmessage = (event) => {
      console.log(event);
    };

    // Alert the server that the client is gone
    window.addEventListener("beforeunload", () => ws.send("CLOSE"));
  }

  handleUsername=(event) => {
    this.setState({addUser: event.target.value});
  }

  handleChat=(event) => {
    event.preventDefault();
    let newMessage = this.state.message;
    newMessage = event.target.value;
    this.setState({addMessage : newMessage});
  }

  submitMessage=(event) => {
    event.preventDefault();
    let newMessage = this.state.message;
    newMessage.push({username : this.state.username, message : this.state.addMessage});
    this.setState({message : newMessage});
  }

  handleSubmit=(event)=> {
    event.preventDefault();
    this.setState({username : this.state.addUser, isLogged : true})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Slacky</h1>
        </header>

        <Username/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="username" onChange={this.handleUsername}></input>
          <input type="submit" value="OK"></input>
        </form>

        <Chat username={this.state.username} message={this.state.message} handleChat={this.handleChat} submitMessage={this.submitMessage}/>

          <p>{this.state.username}, write your message here</p>





      </div>
    );
  }
}

export default App;
