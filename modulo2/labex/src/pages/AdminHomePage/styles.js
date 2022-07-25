import styled from 'styled-components'

export const TripDiv = styled.div`
margin: auto;

background-color: rgba(0,0,0,0.7);
color: #EAEAEA;
width: 45vw;
height: 3vh;
box-shadow: 0px 0px 10px #ca315f;
border-radius: 5px;
margin-top: 5vh;
margin-bottom: 5vh;
padding: 5vh;
display: flex;
justify-content: space-between;
align-content: center;
& h2 {
    margin-top: -10px;
}
& button{
    
    margin: 5%;
    width: fit-content;
    height: fit-content;
    padding: 5px 10px;
    color: #ca315f;
    background-color: lightgray;
    font-weight: bolder;
    border-radius: 90px;
    margin-top: auto;
    margin-bottom: auto;
 } button:hover{
    cursor: pointer;
    color: lightgrey;
    background-color: #ca315f;

}
` 

export const TitleContainer = styled.div`
width: 45vw;
display: flex;
justify-content: center;
& p{
    font-size: x-large;
    margin-left: 20%;
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