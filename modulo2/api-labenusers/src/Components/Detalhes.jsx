import React from "react";
import axios from "axios";


export default class Detalhes extends React.Component {
    state = {
        listaNomes: [2],
      };
    getAllUsers = () => {
        axios.get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          {
            headers: {
              Authorization: "carolina-fortuna-freire"
            }
          }
        )
        .then((response) => {
            this.setState({listaNomes: response.data})
           
            
          })
          .catch((error) => {
            console.log(error.message);
          });
        };

    componentDidMount(){
        this.getAllUsers();
    }

    deleteUser = (id) =>{
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(
            url,
            {
                headers:{
                    Authorization: "carolina-fortuna-freire"
                }
            }
        )
        .then(() => {
            alert(`Usuário deletado`);
            this.getAllUsers();
        })
        .catch((error) =>{
            alert('Não foi possivel deletar usuário')
        })
    }
    render(){
         const renderizaLista = this.state.listaNomes.map((user) => {
                return  <li key={user.id}>{user.name} <button onClick={()=>this.deleteUser(user.id)} className="botao-del">X</button></li>  ;
           })
      return (
        <div>
            <h2>Usuários Cadastrados</h2>
            <ul className="lista-nomes">
                <li>
                {renderizaLista}
                </li>
              
              
              
          </ul>
        </div>
      );
    }
    }

    //O componentDidMount fica no app ou no componente?
    