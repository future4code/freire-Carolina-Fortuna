import styled from 'styled-components'

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
}
& section{
display: flex;
line-break: auto;
width: 40vw;
margin-top: 20px;
}
& input{
    width: 500px;
    height: 8vh;
    background-color: #f4c6d4;
}
& p{
    margin: auto;
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
}
`
export const Main = styled.div`
font-size: x-large;
margin: auto;
& h1{
    z-index: 0;
    position: absolute;
    top: 200px;
    left: 400px;
    color: #DA094A;
    margin: auto;
    font-style: italic;
    line-break:auto;
    width: 600px;
    text-align: center;
}
& img{
    z-index: 0;
    position: absolute;
    top: 400px;
    left: 600px;
    height: 200px;
    width: auto;
    filter: grayscale(100%);
}

& video{
    position: relative;
  right: 0;
  bottom: 0;
  max-width: 100vw;
  height: auto ;
  z-index: -1;
  overflow: hidden;
}
`