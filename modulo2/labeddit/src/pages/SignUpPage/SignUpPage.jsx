import React from "react";
import { useNavigate } from "react-router-dom";

//hook
import useForm from '../../hooks/useForm'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

//requisição axios
import { signUp } from "../../services/users";

//componentes e estilizações
import Header from "../../components/Header/Header";
import { Input } from "../../components/Input/styles";
import { RoundButton } from "../../components/RoundButton/styles";
import { H1 , PolicyContainer} from "./styles";



export const SignUpPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({username:'', email:'', password:''})
    const onSubmitForm = (event) =>{
        event.preventDefault()
        console.log(form)
        signUp(form, clear, navigate)
      
    }

    
    return(
       <div>
           <Header/>
          
           <center>
 
                <H1>Olá, boas vindas ao Labeddit ;)</H1>
                <form onSubmit={onSubmitForm}>
                
                    <Input 
                        type="text" 
                        placeholder="Nome de usuário" 
                        value={form.username}
                        onChange={onChange}
                        name='username'
                        required
                    />
                    
                    <br />
                    <Input 
                        type="email" 
                        placeholder="E-mail"
                        value={form.email}
                        onChange={onChange}
                        name='email'
                        required
                    />

                    <br />
                    <Input 
                        type="password" 
                        name="password" 
                        placeholder="Senha" 
                        value={form.password}
                        onChange={onChange}
                        required
                        pattern={'^.{8,30}$'}
                        title='Senha deve possuir no mínimo 8 e no máximo 30 caracteres'
                    />

                    <br />

                    <PolicyContainer>
                        <p>Ao continuar você concorda com o nosso contrato de usuário e a nossa
                        Política de privacidade </p>
                        <div className="checkbox">
                            <input type='checkbox'/>
                            <p>Eu concordo em receber e-mails sobre coisas legais no Labeddit</p>
                        </div>
                    </PolicyContainer>
                    <RoundButton type="sumbit">Cadastrar</RoundButton>
                </form>
            </center>
          
       </div>
    )
}

export default SignUpPage