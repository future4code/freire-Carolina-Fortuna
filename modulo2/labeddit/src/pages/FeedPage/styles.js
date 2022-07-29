import styled from "styled-components";

export const InputTitle = styled.input`

width: 364px;
height: 53px;
background: #EDEDED;
border-radius: 12px; 
border-style: none;
margin: 34px 20px 30px 12px;
`

export const InputText = styled.input`
width: 364px;
height: 131px;
background: #EDEDED;
border-radius: 12px;
border-style: none;
`
export const Card = styled.div`

min-height: 167px;
width: 364px;
height: fit-content;
border-radius: 12px;
padding: 9px, 10px, 9px, 10px;

margin: 20px;
background: #FBFBFB;

border: 1px solid #E0E0E0;
& p {
    font-family: IBM Plex Sans, sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;

color: #6F6F6F;

}
& h2{
    font-family: IBM Plex Sans, sans-serif;
font-size: 18px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
margin-left: 14px;

}

& h1{
    font-size: small;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
}
`

export const VotesDiv = styled.div`
display: flex;

height: 27.88617706298828px;
width: 98px;

border-radius: 28px;
padding: 5px;
justify-content: space-between;
border: 0.79px solid #ECECEC;
& img{
    height: 13.941632032212166px;
width: 13.942753553189064px;



}

`


export const CommentsDiv = styled.div`
display: flex;

height: 27.88617706298828px;
width: 98px;

border-radius: 28px;
padding: 5px;
justify-content: space-between;

border: 0.79px solid #ECECEC;
& img{
    height: 13.941632032212166px;
width: 13.942753553189064px;


}

`
export const FlexDiv = styled.div`
display:flex;
`