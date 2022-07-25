import React from "react";
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import {goToLogin} from '../../routes/coordinator'



export function TripDetailsPage (props){
    const navigate = useNavigate();
  
 

    const [approvedCandidates, setApprovedCandidates] = useState([]);
    const [candidates, setCandidates] = useState([]);
    
    useEffect((id)=>{
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-fortuna/trip/${id}`;
        const token = localStorage.getItem('token');
        axios.get(url, {headers: {
            auth: token
        }})
        .then((response)=>{
            console.log(response.data.trip)
            setApprovedCandidates(response.data.trip.approved)
            setCandidates(response.data.trip.candidates)
        })
        .catch((error)=>{
            console.log(error.response)
            goToLogin(navigate)
        })
    },[])
    

    return(
<p>TripDetailsPage</p>
    )
}

