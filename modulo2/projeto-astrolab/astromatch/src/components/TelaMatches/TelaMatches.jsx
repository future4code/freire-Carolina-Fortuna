import React from "react";
import Logo from './img/astromatch-logo.png'
import coracao from './img/heart.png'
import xis from './img/xis-preto.png'
import cara from './img/cara.jpg'
import styled from 'styled-components'
import botaoMatch from './img/users-alt-free-icon-font.png'
import { useState } from "react";




const Logoo = styled.img`
width: 150px;
height:auto;
margin-bottom: 1px;
`

const Match = styled.img`
width: 25px;
height: 25px;
margin-left: 10%;
margin-bottom: 15px;
`

const FotoPessoa = styled.img`
  max-width: 300px;
  max-height: 400px;
  width:300px;
  height: auto;
  /* min-height:400px;
  min-width: 300px; */
  border-radius: 10px;
  box-shadow: 5px 5px 5px #48A498;
  position: relative;
  margin-top: 15px;
  filter: hue-rotate(300deg);
  /* mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%, red 95%);
   -webkit-mask-image: linear-gradient(to top, (0,0,0,0)  5%, red 95%); */
  
`;

const Hr = styled.hr`
  width: 380px;
  margin-top: -5px;
 border-color: 1px purple;
`
const Identificacao = styled.div`
 color: #f5adf5;
  position: absolute;
            top: 370px;
            left: 14%;
  word-wrap: break-word;
  width: 300px;
  text-align: left;
  & span{
    display: flex;
    margin-bottom: -30px;
  } 
  & p{
    font-weight: bold;
  }`;
 const Botao = styled.img`
 width: 50px;
 height: 50px;

 &:hoover,
 &:focus{
   width: 60px;
   height: 60px;
   cursor: pointer;
   filter: invert(100%)
 }`;

const BotaoContainer = styled.div`
width: 380px;
display: flex;
justify-content: space-around;
margin-inline: auto;
margin-top: 10px;
bottom: 70px;
position: fixed;
`
const Background = styled.div`
width: 100vw;
height:100vh;
background:linear-gradient(blueviolet, #48A498)

`

const Div = styled.div`
width: 30vw;
height: 90vh;
background-color: white;
border: 1px solid black;
border-radius: 10px;
left:0;
right:0;
margin-left:auto;
margin-right:auto;
top:15px;
position: absolute;
`
function TelaMatches() {
  const [botaoLike, setBotaoLike] = useState(false);
  const [botaoDisLike, setBotaoDisLike] = useState(false);
  const [nome, setNome] = useState('');
  const[idade, setIdade]= useState(0);
  const[descricao, setDescricao] = useState('');
  const[foto, setFoto] = ('');
/* 
  const getProfileToChoose = () =>{

  }

  const choosePerson = () =>{

  }
  const like = () =>{
    getProfileToChoose()
    choosePerson() "choice": true

  }

  const dislike = () => {
    getProfileToChoose()
    choosePerson() "choice": false

  } */
  
    return (
      <div>
      <Background>
      <Div>
      <header>
      <Logoo src= {Logo}>
      </Logoo>
      <Match src={botaoMatch} alt="" />
      <Hr />
    
      </header>
      <FotoPessoa src= 'https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/0/03/Brooke_Lynn_Hytes.jpg/revision/latest?cb=20190124191352'/>
      <Identificacao>
      <span>
      <h2>Buzz Aldrin,</h2>
      <h2>36</h2>
      </span>
      <p>Para o alto e avante! Gosto de construir coisas, mas sou um pouco estourado</p>
      </Identificacao>
      <BotaoContainer>
      <Botao src={coracao} alt="like" /*onClick={like}*/ />
      <Botao src={xis} alt="dislike"  /*onClick={dislike}*/ />
      </BotaoContainer>
      </Div> 
      </Background>
      </div>
    );
  }
  
  export default TelaMatches;
  