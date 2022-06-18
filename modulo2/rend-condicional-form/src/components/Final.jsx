import React from "react";
import styled from "styled-components";

const Botao = styled.button`
display: none;
`
export default class Final extends React.Component{

    render() {
        return(
            <div>
                <h1>Final</h1>
                <h3>Muito obrigada por responder nossa pesquisa!</h3>
            </div>
        )
    }
}