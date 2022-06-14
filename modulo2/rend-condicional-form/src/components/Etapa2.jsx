import React from "react";
import styled from "styled-components";


export default class Etapa2 extends React.Component{

    render() {
        return(
            <div>
                <h1>Etapa 2 - Informações do Ensino Superior</h1>
                <form>
                    <label htmlFor="curso">Curso:</label>
                    <br />
                    <input type="text" name="curso"/> 
                    <br />
                    <label htmlFor="unidade">Unidade de Ensino:</label>
                    <br />
                    <input type="text" name="unidade" />
                    
                </form>
            </div>
        )
    }
}