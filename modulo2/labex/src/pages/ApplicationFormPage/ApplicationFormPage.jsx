import React from "react";
import {useNavigate} from 'react-router-dom'
import { goBack } from "../../routes/coordinator";

export function ApplicationFormPage (){
const navigate = useNavigate()
    
    return(
        <div>
<p>ApplicationFormPage</p>
<button onClick={()=>goBack(navigate)}>Voltar</button>
</div>
    )
}

