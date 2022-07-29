import React from "react";
import useForm from '../../hooks/useForm'
import logo from '../../assets/logo.png'
import { goToSignUp } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {login} from '../../services/users'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { Button } from "../../components/Button/styles";
import { Hr } from "../../components/Hr/styles";

export const LoginPage = () => {
 useUnprotectedPage()
 const [form, onChange, clear] = useForm({email:'', password:''})
 const navigate = useNavigate()
 const onLogin = (event) =>{
     event.preventDefault()
     console.log(form)
     login(form, clear, navigate)
 }
    return(<div>
        <center>
        <img src={logo} alt="labeddit" />
        <h2>Labeddit</h2>
        <h4>O projeto de rede social da Labenu</h4>
        
        <form onSubmit={onLogin}>
        <input type="text" 
            placeholder="E-mail" 
            value={form.email}
            onChange={onChange}
            name='email'
            required
            />
         
            <br />
            <input type="password" 
            name="password" 
            placeholder="Senha" 
            value={form.password}
            onChange={onChange}
            required
            />
            <br />
            <Button type="sumbit">Continuar</Button>
        </form>
        <Hr />
        <button onClick={()=>goToSignUp(navigate)}>Crie uma conta!</button>
        </center>
        </div>
    )
}
export default LoginPage



