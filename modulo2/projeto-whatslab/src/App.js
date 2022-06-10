import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';


export default class App extends React.Component{
  state = {
    allMessages: [],
    inputUser: "",
    inputText: ""
  };

  getInputUser = (event) =>
    this.setState({ inputUser: event.target.value});

  getInputText = (event) =>
    this.setState({inputText: event.target.value});

  addMessage = () => {
    const oneMessage = {
      user: this.state.inputUser,
      text: this.state.inputText
    };
    const newMessagesList = [...this.state.allMessages, oneMessage];
    this.setState({ allMessages: newMessagesList});
  };

render() {
  const printMessages = this.state.allMessages.map((oneMessage) =>{
    return(
      <div className="messages-free">
          <p className='message-user'>{oneMessage.user}</p>
          <p>{oneMessage.text}</p>
        
        </div>
    );

  });
  
  return (
    <div className="App">
        <div className='container'>
        <input
          className="user-input"
          placeholder='Usuário'
          type="text"
          id="name"
          value={this.state.inputUser}
          onChange={this.getInputUser}
        />
        <input
          className="text-input"
          type="text"
          id="message"
          placeholder='Mensagem'
          value={this.state.inputText}
          onChange={this.getInputText}
        />

        <button onClick={this.addMessage}>Enviar</button>
        <div className='message-box'> {printMessages} </div>
       
        </div>
      </div>
  );
}
}