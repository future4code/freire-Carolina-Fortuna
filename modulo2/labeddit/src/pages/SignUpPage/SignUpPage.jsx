import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import useForm from '../../hooks/useForm'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/users";


export const SignUpPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({userName:'', email:'', password:''})
    const onSubmitForm = (event) =>{
        event.preventDefault()
        console.log(form)
        signUp(form, clear, navigate)
      
    }

    
    return(
       <div>
           <Header/>
          
           <center>
           <h1>Olá, boas vindas ao Labeddit</h1>
           <form onSubmit={onSubmitForm}>
         

            <input type="text" 
            placeholder="Nome" 
            value={form.userName}
            onChange={onChange}
            name='userName'
            required
            
            />
            
            <br />
            <input type="email" 
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
            pattern={'^.{8,30}$'}
            title='Senha deve possuir no mínimo 8 e no máximo 30 caracteres'
            />
            <br />
            <button type="sumbit">Cadastrar</button>
            </form>
            </center>
          
       </div>
    )
}

export default SignUpPage