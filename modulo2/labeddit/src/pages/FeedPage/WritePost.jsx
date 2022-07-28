import { create } from "@mui/material/styles/createTransitions";
import React from "react";


import useForm from '../../hooks/useForm'

import { createPost } from "../../services/posts";


export const WritePost = () => {


    const [form, onChange, clear] = useForm({title:'', body:''})
    const onSubmitPost = (event) =>{
        event.preventDefault()
        console.log(form)
        createPost(form, clear)
      
    }

    
    return(
       <div>
          
          
    
           <form onSubmit={onSubmitPost}>
         

            <input type="text" 
            placeholder="Título" 
            value={form.title}
            onChange={onChange}
            name='title'
            required
            
            />
            
            <br />
            <input type="text" 
            placeholder="Escreva seu post..."
            value={form.body}
            onChange={onChange}
            name='body'
            required
            />
            <br />
            
            <button type="sumbit">Postar</button>
            </form>
         
          
       </div>
    )
}

export default WritePost