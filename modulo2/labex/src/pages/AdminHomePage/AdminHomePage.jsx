import React from "react";
import {useNavigate} from 'react-router-dom'
import {Header, Main} from '../ListTripsPage/styles'
import { TripDiv, TitleContainer } from "./styles";
import { goToLogin, goToHome, goToCreateTrip, goToDetails } from "../../routes/coordinator";
import { useEffect, useState } from "react";

import logo from '../../img/logo.png'
import axios from "axios";

export function AdminHomePage (){


    const navigate = useNavigate();
    const [trip, setTrip] = useState([])


    useEffect(()=>{
        const token = localStorage.getItem('token');
        if( token === null){
            goToLogin(navigate)}

        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-fortuna/trips';
      
        axios.get(url)
        .then((response)=>{
    
            setTrip(response.data.trips)
            console.log(response.data.trips)
          
        })
        .catch((error)=>{
            console.log(error.response)  
        })
    },[])
    
    const deleteTrip = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-fortuna/trips/${id}`
        axios.del(url, {headers:{'Content-Type': 'application/json', auth: localStorage.getItem('token')}})
    }
    
    const printTrips= trip.map((item)=>{
       return(
         <TripDiv id={trip.id}>
       
        <h2 onClick={()=>goToDetails(navigate, trip.id)}>{item.name}</h2>
        <button onClick={()=>deleteTrip(trip.id)}>X</button>
        
         
         </TripDiv>
        )
         })




    
    return(
        <div>
            <Header>
                <img src={logo} alt="labe-x" onClick={()=>goToHome(navigate)} />
                <button onClick={()=>goToLogin(navigate)}>Logout</button>
            </Header>
<Main>
    <center>
        <TitleContainer>
<p>Bem Vindo @Admin!</p> <button onClick={()=>goToCreateTrip(navigate)}>Nova viagem</button>
</TitleContainer>


{printTrips}

<button onClick={()=>goToDetails(navigate,trip.id)}>Detalhes da viagem</button>
</center>
</Main>
</div>
    )
}

