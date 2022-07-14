import React from "react";
import {useNavigate} from 'react-router-dom'

export function AdminHomePage (){
const navigate = useNavigate();
const goToCreateTrip = () =>{
    navigate('/admin/trips/create')
}

const goToDetails = () =>{
    navigate('/admin/trips/:id')
}
    
    return(
        <div>
<p>Admin</p>
<button onClick={goToCreateTrip}>Nova viagem</button>
<button onClick={goToDetails}>Detalhes da viagem</button>
</div>
    )
}

