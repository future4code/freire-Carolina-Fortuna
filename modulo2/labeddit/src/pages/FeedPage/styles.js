import styled from "styled-components";

export const InputTitle = styled.input`

width: 364px;
height: 53px;
background: #EDEDED;
border-radius: 12px; 
border-style: none;
margin: 34px 20px 30px 20px;
`

export const InputText = styled.input`
width: 364px;
height: 131px;
background: #EDEDED;
border-radius: 12px;
border-style: none;
`
export const Card = styled.div`

min-height: 120px;
width: 364px;
height: fit-content;
border-radius: 12px;
padding: 9px, 10px, 9px, 10px;

margin-block: 20px;
background: #FBFBFB;

border: 1px solid #E0E0E0;
& p {
    font-family: IBM Plex Sans KR, sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
margin: 14px;
color: #6F6F6F;

}
& h2{
    font-family: IBM Plex Sans KR, sans-serif;
font-size: 18px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
margin-left: 14px;

}


`

export const VotesDiv = styled.div`
    display: flex;
    margin: 10px;
    height: 20px;
    width: 80px;

    border-radius: 28px;
    padding: 5px;
    justify-content: space-between;
    border: 0.79px solid #ECECEC;
    
    & img{
        height: 13.941632032212166px;
        width: 13.942753553189064px;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 3px;
    } & img:hover{
        cursor: pointer;
     fill: aqua;
        filter: brightness(0%)
        }

    & p {
        font-family: IBM Plex Sans KR, sans-serif;
        font-size: 10px;
        font-weight: 700;
        text-align: center;
        color: #6F6F6F;
        margin-top: 3px;
    }
`


export const CommentsDiv = styled.div`
    display: flex;
    margin: 10px;
    height: 20px;
    width: 50px;

    border-radius: 28px;
    padding: 5px;
    justify-content: space-between;

    border: 0.79px solid #ECECEC;

    & img{
        height: 13.941632032212166px;
        width: 13.942753553189064px;
        margin-top: 3px;
        margin-left: 5px;
        margin-right: 5px;
    }& img:hover{
        cursor: pointer;
     
        filter: brightness(0%)
        }
    & p {
        font-family: IBM Plex Sans KR, sans-serif;
        font-size: 10px;
        font-weight: 400;
        text-align: center;
        color: #6F6F6F;
        margin-top: 3px;
        margin-right: 7px;
    }
`
export const FlexDiv = styled.div`
display:flex;
position: static;
left: 14em;
bottom: 10em;
`