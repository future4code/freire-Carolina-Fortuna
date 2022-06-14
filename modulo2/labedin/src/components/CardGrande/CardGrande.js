import React from 'react';
import styled from 'styled-components';

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const Nome = styled.h4 `
    margin-bottom: 15px;
`;

const Divisoria = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

function CardGrande(props) {
    return (
        <BigCardContainer>
            <Imagem>src={ props.imagem }</Imagem>
            <Divisoria>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </Divisoria>
        </BigCardContainer>
    )
}

export default CardGrande;