import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {goToApplication, goBack, goToLogin} from '../../routes/coordinator'
import {Header, Main, TripContainer, ApplicationContainer} from './styles'

import marte from '../../img/planeta-marte.webp' 
import logo from '../../img/logo.png'

export function ListTripsPage (){
const navigate = useNavigate()

const [trip, setTrip] = useState([])

useEffect(()=>{
        
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



const printTrips= trip.map((item)=>{
   return(
     <TripContainer>
     <img src={marte} alt="Marte" />
     <div>
    <h2>{item.name}</h2>
    <p> {item.description}</p>
    <p>Planeta: {item.planet}</p>
    <p>Duração: {item.durationInDays} dias</p>
    <p>Data: {item.date}</p>
    </div>
     
     </TripContainer>
    )
     })

    // const pickImagePlanet = trip.planet.map((item)=>{
    //     switch{
    //         case 'Terra'
    //         return ''
    //     }
    // })

console.log('lista de viagens', trip)
    return(
        
        <div>
        <Header>
            <img src={logo} alt="labe-x" onClick={()=>goBack(navigate)} />
            <button onClick={()=>goToLogin(navigate)}>Admin</button>
        </Header>

        <Main>
            <center>
                <h1>Viagens Disponíveis</h1>
               {printTrips}
               
       <ApplicationContainer>
     
        <p>Gostou de alguma viagem? 
                    <button onClick={()=>goToApplication(navigate)}>Inscreva-se aqui</button></p>
                   
        </ApplicationContainer>
        
        </center>
        </Main>
        </div>
    )
}

