import React from "react";
import {useNavigate} from 'react-router-dom'

export function LoginPage (){
    const navigate = useNavigate();
    const goToAdmin =() =>{
        navigate('/admin/trips/list')
    }
    
    return(
        <div>
<p>LoginPage</p>
<button onClick={goToAdmin}>Entrar</button>
</div>
    )
}

