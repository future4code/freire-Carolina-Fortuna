import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { goBack, goToAdmin } from "../../routes/coordinator";
import logo from '../../img/logo.png'
import {Header, Main, ContainerLogin} from './styles.js'

export function LoginPage (){
    
    const navigate = useNavigate();
  

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    };

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    };

    const onSubmitLogin = () =>{
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-fortuna/login', body)
        .then((response)=>{
            console.log(response)
            localStorage.setItem('token', response.data.token)
            goToAdmin(navigate)
        }).catch((error)=>{
            console.log(error.response.data)
            alert(error.response.data.message)
        })
        
    }

    return(
        <div>
            <Header>
              <img src={logo} alt="labe-x" onClick={()=>goBack(navigate)} />
                <button onClick={()=>goBack(navigate)}>Voltar</button>
          </Header>
        <Main>
            <ContainerLogin>
                <center>
        <h2>Login</h2>
        <input type="email" 
        placeholder="E-mail"  
        onChange={onChangeEmail}
        value={email}/>
        <br/>
        <input type='password' 
        placeholder="Senha" 
        onChange={onChangePassword} 
        value={password}/>
        <br/>
        <button onClick={onSubmitLogin}>Entrar</button>
        </center>
        </ContainerLogin>
        </Main>
        </div>
    )
}

