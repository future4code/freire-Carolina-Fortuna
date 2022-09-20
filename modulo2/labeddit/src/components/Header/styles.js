import styled from "styled-components";

export const HeaderBar = styled.div`
 
    width: 100%;
    height: 50px;
   
    background: #EDEDED;
    display: flex;
    justify-content: space-around;


& img {
    width: 28.02px;
    height: 28.64px;
    position: absolute;
    margin: auto;
    top: 10px;
    left: 0;
    right: 0;
    
}

& button{
    border-style: none;
    background-color: inherit;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #4088CB;
    position: absolute;
    top: 10px;
    right: 7%;
    :hover{
        cursor: pointer;
    }

    /* @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin-left: 80%;
} */
}
`
