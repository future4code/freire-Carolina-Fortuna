import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useEffect } from "react";
import { goToLogin, goBack } from "../../routes/coordinator";
import {Header, Main} from '../ListTripsPage/styles'
import { ApplicationForm } from "../ApplicationFormPage/styles";
import logo from '../../img/logo.png'

export function CreateTripPage (){

         const navigate = useNavigate()
        // useEffect=(() =>{
        //     const token = localStorage.getItem('token');
        //     if( token === null){
        //         goToLogin(navigate)
        //     }
        // },[navigate])
    const [form, setForm] = useState({
        name:'', planet:'', date:'', description:'', duration: 0})

    const onChange = (event)=>{
        setForm({...form,[event.target.name]: event.target.value})
    }
    
    return(
        <div>
      
      <Header>
                <img src={logo} alt="labe-x" onClick={()=>goBack(navigate)} />
                <button onClick={()=>goToLogin(navigate)}>Logout</button>
            </Header>
<Main>
    
    <ApplicationForm>
    <center>
    <h1>Nova Viagem</h1>
<form >
{/* onSubmit={} */}
    <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder='Nome'
        required
        type='text'
        pattern={'^.{5,}'}
        title='Insira um nome com no mínimo 5 letras'
    />
    <br />
    <select 
    name="planet"
    value={form.planet}
    onChange={onChange}
    required>
        <option value="Mercúrio">Mercúrio</option>
        <option value="Vênus">Vênus</option>
        <option value='Terra'>Terra</option>
        <option value="Marte">Marte</option>
        <option value="Júpiter">Júpiter</option>
        <option value="Saturno">Saturno</option>
        <option value="Urano">Urano</option>
        <option value="Netuno">Netuno</option>
        <option value="Plutão">Plutão</option>
    </select>
        <br />
    <input type="date"
        name="date"
        value={form.date}
        onChange={onChange}
        required 
    />
    <br />
    <input type="text"
        name="description" 
        value={form.description}
        onChange={onChange}
        placeholder='Descrição'
        required
        pattern={"^.{30,}"}
        title='Escreva uma descrição com mais de 30 letras'
    />
    <br />
    <input type="number" 
        name="duration" 
        value={form.duration}
        placeholder="Duração (em dias)"
        onChange={onChange}
        required 
        pattern={"^.[5-9][0-9]"}
        title='A duração deve ser maior que 50 dias '
    />
    <br />

    <button>Enviar</button> <button onClick={()=>goBack(navigate)}>Voltar</button>

    
</form>
</center>
</ApplicationForm>
</Main>
</div>
    )
}

