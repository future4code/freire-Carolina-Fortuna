import styled from 'styled-components'

export const ApplicationForm = styled.div`
margin: auto;

background-color: rgba(0,0,0,0.7);
color: #EAEAEA;
width: 45vw;
height: fit-content;
box-shadow: 0px 0px 10px #ca315f;
border-radius: 15px;
margin-top: 1vh;
margin-bottom: 15vh;
padding: 5vh 1vw;
& input, select{
    width: 30vw;
    height: 5vh;
    background-color: #f4c6d4;
    border-radius: 5px;
    margin-top: 3%;
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