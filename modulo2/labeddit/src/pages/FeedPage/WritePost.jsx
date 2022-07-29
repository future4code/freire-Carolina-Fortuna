
import React, { useState } from "react";


import useForm from '../../hooks/useForm'

import { createPost } from "../../services/posts";
import { InputText, InputTitle } from "./styles";
import { Button } from "../../components/Button/styles";
import { Hr } from "../../components/Hr/styles";


export const WritePost = () => {


    const [form, onChange, clear] = useForm({title:'', body:''})
    const onSubmitPost = (event) =>{
        event.preventDefault()
        console.log(form)
        createPost(form, clear)
       
    }

    
    return(
       <div>
          
          
    <center>
           <form onSubmit={onSubmitPost}>
         

            <InputTitle type="text" 
            placeholder="Título" 
            value={form.title}
            onChange={onChange}
            name='title'
            required
            
            />
            
            <br />
            <InputText type="text" 
            placeholder="Escreva seu post..."
            value={form.body}
            onChange={onChange}
            name='body'
            required
            />
            <br />
            
            <Button type="sumbit">Postar</Button>
            </form>
         <Hr/>
            </center>
       </div>
    )
}

export default WritePost