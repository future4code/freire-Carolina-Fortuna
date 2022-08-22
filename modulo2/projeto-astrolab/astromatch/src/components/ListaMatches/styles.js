import styled from 'styled-components';

export const Foto = styled.img`
width: 55px;
height: 55px;
margin-left: 2%;

border-radius: 100%;
`

export const Match = styled.div`
display: flex;
width: 25vw;

margin-inline: auto;
padding: 8px;

& p{
    margin: 15px;
};
&:hover{
    background-color: #d1cbd8;
    cursor: pointer;



}
`