import React from "react";
import styled from "styled-components";


export default class Etapa1 extends React.Component{

    render() {
        return(
            <div>
                <h1>Etapa 1 - Dados Gerais</h1>
                <form>
                    <label htmlFor="name">Nome:</label>
                    <br />
                    <input type="text" name="name"/> 
                    <br />
                    <label htmlFor="idade">Idade:</label>
                    <br />
                    <input type="text" name="idade" />
                    <br />
                    <label htmlFor="email">E-mail:</label>
                    <br />
                    <input type="e-mail" name="email" />
                    <br />
                    <label>Escolaridade:</label>
                    <br />
                    <select name="escolaridade">
                        <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                        <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                        <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                        <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                    </select>
                </form>
            </div>
        )
    }
}