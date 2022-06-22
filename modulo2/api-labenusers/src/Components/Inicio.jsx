import React from "react";




export default class Inicio extends React.Component {

    render(){
      return (
        <div>
            <h2>Cadastro de Usuário</h2>
         <input 
         type="text" 
         placeholder="Nome" 
         value={this.props.stateInputName}
         onChange={this.props.onName} /> 

         <input 
         type='email' 
         placeholder="E-mail"  
        value={this.props.stateInputEmail}
         onChange={this.props.onEmail} />
         <button 
         onClick={this.props.criaUser}>Criar usuário</button>
        </div>
      );
    }
    }