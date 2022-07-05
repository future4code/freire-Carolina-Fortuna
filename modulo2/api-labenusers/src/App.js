import React from 'react';
import './App.css';
import './Components/Detalhes';
import Detalhes from './Components/Detalhes';
import './Components/Inicio';
import Inicio from './Components/Inicio';


export default class App extends React.Component {
  state = {
    inicio: true
  };
  onClickinicio = () =>{
    this.setState({inicio: !this.state.inicio})
  };
  
  render(){

    let item

    if(this.state.inicio) {
      item = <Inicio/>
    }
    else{
       item =  <Detalhes/>  
      
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
