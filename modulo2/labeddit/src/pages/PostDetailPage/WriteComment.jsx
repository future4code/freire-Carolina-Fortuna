
import React, { useState } from "react";
import useForm from '../../hooks/useForm'
import { createComment } from "../../services/comments";


export const WriteComment = (props) => {


    const [form, onChange, clear] = useForm({body:''})
    
    const onSubmitComment = (event) =>{
        event.preventDefault()
        console.log(form)
        createComment(form, clear, props.id)    
    }

    
    return(
       <div>
          
           <form onSubmit={onSubmitComment}>
             
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