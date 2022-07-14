import React from "react";
import {useNavigate} from 'react-router-dom'
import {goToApplication, goBack} from '../../routes/coordinator'

export function ListTripsPage (){
const navigate = useNavigate()




    
    return(
        <div>
<p>ListTrips</p>
<button onClick={()=>goBack(navigate)}>Voltar</button>
<button onClick={()=>goToApplication(navigate)}>Inscrever</button>
</div>
    )
}

