import React from 'react';
import './App.css';
import axios from "axios";
import './Components/Detalhes';
import Detalhes from './Components/Detalhes';
import './Components/Inicio';
import Inicio from './Components/Inicio';


export default class App extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
    listaNomes:[],
    inicio: true
  };
  onClickinicio = () =>{
    this.setState({inicio: !this.state.inicio})
  }
  
  
  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  
  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = (event) => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "carolina-fortuna-freire"
        }
      }
    );

    request
      .then((response) => {
        console.log(response.data);
        this.alertSucesso()
        
      })
      .catch((error) => {
        this.alertErro();
      });
  };


  alertSucesso = () =>{
    alert('Usuário criado com sucesso!')
  };

  alertErro = () =>{
    alert('Erro ao criar usuário.')
  };

  getAllUsers = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "carolina-fortuna-freire"
        }
      }
    );

    request
      .then((response) => {
        
        this.setState({ listaNomes: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
    };
  render(){

    let item

    if(this.state.inicio) {
      item = <Inicio
      criaUser= {this.createUser}
      onNome={this.onChangeInputName}
      onEmail={this.onChangeInputEmail}
      stateInputEmail={this.inputEmail}
      stateInputName={this.inputName}
      />
    }
    else{
       item =  <Detalhes
        nomes={this.listaNomes}
        montarLista= {this.getAllUsers}
        />  
      
    }
    return (
      <div className="App">
        <center className='container'>
        
        {item}
       

        <button onClick={this.onClickinicio}>Voltar</button>
        </center>
      </div>
    );
  }
}
