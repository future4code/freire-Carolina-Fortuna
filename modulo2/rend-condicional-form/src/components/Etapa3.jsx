import React from "react";
import styled from "styled-components";


export default class Etapa3 extends React.Component{

    render() {
        return(
            <div>
                <h1>Etapa 3 - Informações Gerais de Ensino</h1>
                <form>
                    <label htmlFor="pq">Por que você não terminou um curso de graduação?</label>
                    <br />
                    <textarea  rows="5" cols="40"/> 
                    <br />
                    <label htmlFor="curso-complementar">Você fez algum curso complementar?</label>
                    <br />
                    <select name="curso-complementar">
                        <option value="tecnico">Curso técnico</option>
                        <option value="ingles">Curso de Inglês</option>
                        <option value="nao">Nenhum</option>
                    </select>
                </form>
            </div>
        )
    }
}