import { create } from "@mui/material/styles/createTransitions";
import React from "react";


import useForm from '../../hooks/useForm'

import { createComment } from "../../services/comments";


export const WriteComment = () => {


    const [form, onChange, clear] = useForm({body:''})
    const onSubmitPost = (event) =>{
        event.preventDefault()
        console.log(form)
        createComment(form, clear, id)
      
    }

    
    return(
       <div>
          
          
           
           <form onSubmit={onSubmitPost}>
         

        
            <input type="text" 
            placeholder="Escreva seu comentário..."
            value={form.body}
            onChange={onChange}
            name='body'
            required
            />
            <br />
            
            <button type="sumbit">Responder</button>
            </form>
         
          
       </div>
    )
}

export default WriteComment