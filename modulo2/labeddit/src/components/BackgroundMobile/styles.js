import styled from "styled-components";
import {colorRose} from '../../constants/colors'

export const Background = styled.div`
width: 100vw;
height:100vh;
background:linear-gradient(orange, hotpink, grey);

`

export const Div = styled.div`
width: 300px;
min-height: 95vh;
height: fit-content;
background-color: white;
border: 1px solid black;
border-radius: 10px;
left:0;
right:0;
margin-left:auto;
margin-right:auto;
top:15px;
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