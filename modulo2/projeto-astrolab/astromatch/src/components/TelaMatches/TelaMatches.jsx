import React from "react";
import coracao from './img/heart-red.png'
import xis from './img/xis-vermelho.png'
import cara from './img/cara.jpg'
import styled from 'styled-components'
import { useState } from "react";


const FotoPessoa = styled.img`
  max-width: 25vw;
  max-height: 380px;
  width:300px;
  height: auto;
  /* min-height:400px;
  min-width: 300px; */
  border-radius: 10px;
  box-shadow: 0px 0px 10px #48A498;
  position: relative;
  left: 50%;
transform: translateX(-50%);


  filter: hue-rotate(300deg);
  /* mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%, red 95%);
   -webkit-mask-image: linear-gradient(to top, (0,0,0,0)  5%, red 95%);  */
  
`;


const Identificacao = styled.div`
 color: darkviolet;
  position: absolute;
            top: 360px;
            left: 50%;
            transform: translateX(-50%);
  word-wrap: break-word;
  width: 290px;
  text-align: left;
  & span{
    display: flex;
    margin-bottom: -30px;
  } 
  & p{
    font-weight: bold;
  }`;


 const BotaoLike = styled.img`
 width: 50px;
 height: 50px;
 filter:grayscale(100%);
 &:hover{
   width: 50px;
   height: 50px;
   cursor: pointer;
   filter: hue-rotate(180deg);
 }`;

const BotaoDisLike = styled.img`
width: 50px;
height: 50px;
filter:grayscale(100%);
&:hover{
  width: 50px;
  height: 50px;
  cursor: pointer;
  filter: saturate(100%);
}`;

const BotaoContainer = styled.div`
width: 380px;
display: flex;
justify-content: space-around;
margin-inline: auto;

bottom: 40px;
position: fixed;
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
      <FotoPessoa src= 'https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/0/03/Brooke_Lynn_Hytes.jpg/revision/latest?cb=20190124191352'/>
      <Identificacao>
      <span>
      <h2>Buzz Aldrin,</h2>
      <h2>36</h2>
      </span>
      <p>Para o alto e avante! Gosto de construir coisas, mas sou um pouco estourado</p>
      </Identificacao>
      <BotaoContainer>
      <BotaoLike src={coracao} alt="like" /*onClick={like}*/ />
      <BotaoDisLike src={xis} alt="dislike"  /*onClick={dislike}*/ />
      </BotaoContainer>
      
      </div>
    );
  }
  
  export default TelaMatches;
  