import styled from "styled-components";

export const OutlineButton = styled.button`
    margin: 12px;
    justify-content: center;
    align-items: center;

    height: 51px;
    width: 365px;
    border-radius: 27px;
    padding: 13px, 133px, 13px, 133px;
    border: 1px solid #FE7E02 ;
    background: white;


    font-size: 25px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 18px;

    text-align: center;
    color: #FE7E02;
`

export const LogoContainer = styled.div`
    margin-top: 50px;

    & h2{
        font-family: IBM Plex Sans KR, sans-serif;
        font-size: 36px;
        font-weight: 700;
        line-height: 47px;
      
        text-align: center;
        color: #373737;
    }
    & h4{
        font-family: IBM Plex Sans KR, sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;
        margin-top: -30px;
        margin-bottom: 80px;
    }
`