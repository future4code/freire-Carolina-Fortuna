import React from "react";
import axios from "axios";




export default class Inicio extends React.Component {
    state = {
        inputName: "",
        inputEmail: "",   
      };

      onChangeInputName = (event) => {
        this.setState({ inputName: event.target.value });
      };
    
      
      onChangeInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value });
      };
    
      createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const body = {
          name: this.state.inputName,
          email: this.state.inputEmail
        };
    
        axios.post(url, body, {
            headers: {
              Authorization: "carolina-fortuna-freire"
            }
          }
        ).then((response) => {
            alert('Usuário criado com sucesso!', response);
            this.setState ({inputName: '', inputEmail: ''})
            
          })
          .catch((error) => {
            alert('Erro ao criar usuário.',error)
            
          });
      };
        
    render(){
      return (
        <div>
            <h2>Cadastro de Usuário</h2>
         <input 
         type="text" 
         placeholder="Nome" 
         value={this.state.inputName}
         onChange={this.onChangeInputName} /> 

         <input 
         type='email' 
         placeholder="E-mail"  
        value={this.state.inputEmail}
         onChange={this.onChangeInputEmail} />
         <button 
         onClick={this.createUser}>Criar usuário</button>
        </div>
      );
    }
    }