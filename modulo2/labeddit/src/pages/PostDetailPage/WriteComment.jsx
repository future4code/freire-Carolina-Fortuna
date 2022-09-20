
import React from "react";

import useForm from '../../hooks/useForm'

import { createComment } from "../../services/comments";

import {InputText} from "../../components/InputText/styles";
import {Button} from "../../components/Button/styles" 
import { Hr } from "../../components/Hr/styles";



export const WriteComment = (props) => {

    const [form, onChange, clear] = useForm({body:''})
    
    const onSubmitComment = (event) =>{
        event.preventDefault()
        console.log(form)
        createComment(form, clear, props.id)    
    }
    
    return(
       <div>
          <center>
           <form onSubmit={onSubmitComment}>

                <InputText 
                    type="text" 
                    placeholder="Escreva seu comentário..."
                    value={form.body}
                    onChange={onChange}
                    name='body'
                    required
                />
                <br />
                
                <Button type="sumbit">Responder</Button>

            </form>
            <Hr/>
            </center>
          
       </div>
    )
}

export default WriteComment