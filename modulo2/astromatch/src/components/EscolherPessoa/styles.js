import styled from 'styled-components';


export const FotoPessoa = styled.img`
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
object-fit: cover;
    overflow: hidden;


  filter: saturate(200%);
   mask-image: linear-gradient(to top, rgba(0,0,0,0) 20%, red 80%);
   -webkit-mask-image: linear-gradient(to top, (0,0,0,0)  20%, red 80%);  
  
`;

// export cosnt DivFoto = styled.div`




// `

// .container {
//   display: block;
//   width: 100%;
//   height: auto;
//   position: relative;
//   overflow: hidden;
//   padding: 34.37% 0 0 0; /* 34.37% = 100 / (w / h) = 100 / (640 / 220) */
// }

// .container img {
//   display: block;
//   max-width: 100%;
//   max-height: 100%;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
// }


export const Identificacao = styled.div`
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


export const BotaoLike = styled.img`
 width: 50px;
 height: 50px;
 filter:grayscale(100%);
 &:hover{
   width: 50px;
   height: 50px;
   cursor: pointer;
   filter: hue-rotate(180deg);
 }`;

export const BotaoDisLike = styled.img`
width: 50px;
height: 50px;
filter:grayscale(100%);
&:hover{
  width: 50px;
  height: 50px;
  cursor: pointer;
  filter: saturate(100%);
}`;

export const BotaoContainer = styled.div`
width: 350px;
display: flex;
justify-content: space-around;
bottom: 40px;
position: fixed;
`