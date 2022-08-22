//importando bibliotecas
import React from 'react'
import { useState } from "react";

//importando componentes estilizados
import  { Background, Div, Logo, Hr, Icone } from "./stylesApp.jsx";

//importando imagens 
import  logo from './img/astromatch-logo.png';
import botaoMatch from './img/botao-match.png'
import volta from './img/volta.png'

//importando componentes das telas
import TelaMatches from './components/TelaMatches/TelaMatches.jsx';
import ListaMatches from './components/ListaMatches/ListaMatches';


function App() {

  //troca de telas 
  const [tela, setTela] =useState('escolheMatch');
  let telaExibida = ''
  switch(tela){
    
    case 'escolheMatch':
        telaExibida = <div>
        <TelaMatches/>
        </div>;
        break;
    case 'listaMatches':
      telaExibida = <div>
        <ListaMatches/>
      </div>;
      break;
    default:
      telaExibida = <div>
        <TelaMatches/>
        </div>;
        break;
  }
  
  const irParaLista = () =>{
    setTela('listaMatches')
  }

  const irParaEscolha = () =>{
    setTela('escolheMatch')
  }
  //ate aqui

  return (
    <div className="App">
      <Background>
      <Div>

      <header>
      <Icone src = {volta}
      alt= 'escolher-match'
      onClick={irParaEscolha}/>
      <Logo src= {logo}/>
      <Icone src={botaoMatch} 
      alt="lista-matches" 
      onClick={irParaLista} />
      <Hr />
      </header>

      {telaExibida}

      </Div>
      </Background>
    </div>
  );
}

export default App;
