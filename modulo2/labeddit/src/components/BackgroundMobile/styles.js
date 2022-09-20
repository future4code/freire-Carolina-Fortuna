import styled from "styled-components";


export const Background = styled.div`
width: 100vw;
height: max-content;
background: white;

`

export const Div = styled.div`
width: 100vw;
min-height: 100vh;
height: 100vh;
background-color: white;

left:0;
right:0;
margin-left:auto;
margin-right:auto;
top:0px;
position: absolute;
overflow-x: hidden;
overflow-y: auto;

/* celulares */
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
width: 100vw;
border-style: none;
border-radius: 0px;
position: absolute;
top: 0px;
left:0px;
min-height: 100vh;
}

`