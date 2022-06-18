import React from 'react';
import styled from 'styled-components';

const LilCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    width: 550px;
`

const Imagem = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

const Bold = styled.p `
    font-weight: bold;
`


function CardPequeno(props) {
    return (
        <LilCard>
            <Imagem> src={ props.imagem } </Imagem>
            
                <Bold>{ props.requeri }</Bold>
                <p>{ props.info }</p>
            
        </LilCard>
    )
}

export default CardPequeno;