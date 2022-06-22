import React from "react";



export default class Detalhes extends React.Component {
 renderizaLista = () =>{
    this.props.nomes.map((user) => {
        return  <li key={user.id}>{user.name}</li>;
    })};
//  componentDidMount{
//      this.props.montarLista();
//  }
    render(){
        const renderizaLista = () =>{
            this.props.nomes.map((user) => {
                return  <li key={user.id}>{user.name}</li>;
            })}
      return (
        <div>
            <h2>Usuários Cadastrados</h2>
            <ul className="lista-nomes">
              {renderizaLista}
           <button className="botao-del">X</button> 
           
          </ul>
        </div>
      );
    }
    }

    //O componentDidMount fica no app ou no componente?
    //o que é passado por pors e o que é no componente?