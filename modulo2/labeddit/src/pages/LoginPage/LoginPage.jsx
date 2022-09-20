import React from "react";
import useForm from '../../hooks/useForm'
import { useNavigate } from "react-router-dom";

//imagem
import logo from '../../assets/logo.png'

//rota
import { goToSignUp } from "../../routes/coordinator";

//requisição axios
import {login} from '../../services/users'

//hook
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

//componenentes e estilização
import {Input}  from "../../components/Input/styles";
import {Hr}  from "../../components/Hr/styles";
import { OutlineButton, LogoContainer } from "./styles";
import { RoundButton } from "../../components/RoundButton/styles";


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



