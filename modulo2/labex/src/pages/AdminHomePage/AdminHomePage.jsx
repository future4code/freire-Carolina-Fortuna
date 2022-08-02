import React from "react";
import {useNavigate} from 'react-router-dom'
import {Header, Main} from '../ListTripsPage/styles'
import { goToLogin, goBack } from "../../routes/coordinator";

import logo from '../../img/logo.png'

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
            <Header>
                <img src={logo} alt="labe-x" onClick={()=>goBack(navigate)} />
                <button onClick={()=>goToLogin(navigate)}>Logout</button>
            </Header>
<Main>
    <center>
<p>Bem Vindo @Admin!</p> <button onClick={goToCreateTrip}>Nova viagem</button>
<div>

</div>
<button onClick={goToDetails}>Detalhes da viagem</button>
</center>
</Main>
</div>
    )
}

