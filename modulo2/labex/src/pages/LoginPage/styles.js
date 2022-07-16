import styled from 'styled-components';
import bgImage from '../../img/night-background.jpg'



export const Main = styled.div`
background-image:  url(${bgImage});
height: 87.8vh;
width: 100vw;
margin-top: -18px;
overflow: hidden;

`

export const ContainerLogin = styled.div`
margin: auto;
background-color: rgba(0,0,0,0.7);
color: #EAEAEA;
width: 30vw;
height: fit-content;
box-shadow: 0px 0px 10px #ca315f;
border-radius: 15px;
margin-top: 15vh;
padding: 5vh 1vw;

& input{
    width: 20vw;
    height: 5vh;
    background-color: #f4c6d4;
    
    border-radius: 5px;
    margin-top: 2%;
}input:focus{
    background-color: #EAEAEA;
}
& h2{
    margin-top: 2%;
    font-size: xx-large;
    font-weight: lighter;
}
& button{
    margin: auto;
    width: 100px;
    height: 40px;
    color: #EAEAEA;
    background-color: #f12a67;
    font-weight: bolder;
    border-radius: 50px;
    margin-top: 3%;
    margin-bottom: 2%;
   
}
button:hover{
    cursor: pointer;
    color: lightgrey;
    background-color: #c90a43;
    box-shadow: 0px 0px 5px lightpink;
}

`


export const Header = styled.div `
width: 100vw;
height: 15vh;
background-color: black;
opacity: 1;
display: flex;
justify-content: space-between;
align-content: center;
color:  #EAEAEA;

& img{
    width: 180px;
    height: 80px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5% ;
}img:hover{
    cursor: pointer;
}
& button{
    margin: 5%;
    width: 100px;
    height: 40px;
    color: #ca315f;
    background-color: lightgray;
    font-weight: bolder;
    border-radius: 50px;
    margin-top: auto;
    margin-bottom: auto;
}button:hover{
    cursor: pointer;
    color: lightgrey;
    background-color: #ca315f;
}
`
