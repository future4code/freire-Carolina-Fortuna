import React from "react";
import useForm from '../../hooks/useForm'
import logo from '../../assets/logo.png'
import { goToSignUp } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {login} from '../../services/users'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { RoundButton } from "../../components/RoundButton/styles";
import { Hr } from "../../components/Hr/styles";
import { OutlineButton, LogoContainer } from "./styles";
import { Input } from "../../components/Input/styles";


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
       <LogoContainer>
        <img 
        className="image"
        src={logo} alt="labeddit" />
        <h2>LabEddit</h2>
        <h4>O projeto de rede social da Labenu</h4>
        </LogoContainer>
        
        <form onSubmit={onLogin}>
        <Input type="text" 
            placeholder="E-mail" 
            value={form.email}
            onChange={onChange}
            name='email'
            required
            />
         
            <br />
            <Input type="password" 
            name="password" 
            placeholder="Senha" 
            value={form.password}
            onChange={onChange}
            required
            />
            <br />
            <RoundButton type="sumbit">Continuar</RoundButton>
        </form>
        <Hr />
        <OutlineButton onClick={()=>goToSignUp(navigate)}>Crie uma conta!</OutlineButton>
        </center>
        </div>
    )
}
export default LoginPage



