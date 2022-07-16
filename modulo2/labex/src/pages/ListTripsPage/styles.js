import styled from 'styled-components'
import bgImage from '../../img/night-background.jpg'

export const Header = styled.div `
width: 100vw;
height: 17vh;
background-color: black;
opacity: 1;
display: flex;
justify-content: space-between;
align-content: center;
color:  #EAEAEA;

& img{
    width: 180px;
    height: 80px;
    margin-top: 2px;
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
export const Main = styled.div`
background-image:  url(${bgImage});
height: 87.8vh;
width: 100vw;
margin-top: -18px;
overflow: auto;
color: white;
text-shadow: 0px 0px 5px #ca315f;

`

export const TripContainer = styled.div`
margin: auto;
background-color: rgba(0,0,0,0.7);
color: #EAEAEA;
width: 55vw;
height: fit-content;
box-shadow: 0px 0px 10px #ca315f;
border-radius: 15px;
margin-top: 1vh;
margin-bottom: 15vh;
padding: 5vh 1vw;
display: flex;
& div{
    display: block;
    text-align: left;
    margin-left: 10%;
}
& img{
    height: 50vh;
    width: 20vw;
    object-fit: cover;
}
`

export const ApplicationContainer = styled.div`
align-content: center;
width: 100vw;
position: fixed;
bottom: 0px;
left: 0px;
background-color: rgba(0,0,0,0.7);
height: 12vh;
& p{
    font-size: x-large;
    color: white;
    text-shadow: 0px 0px 15px lightgray;
    margin-left:10vw;
    
}
& button{
   
    width: 200px;
    height: 40px;
    color: #EAEAEA;
    background-color: #E4094D;
    margin-right: auto;
    padding: 3px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5vw;
    box-shadow: 0px 0px 15px  #ca315f;
}button:hover{
    cursor: pointer;
    background-color: lightgrey;
    color: #c90a43;
    box-shadow: 0px 0px 5px lightpink;
}

`