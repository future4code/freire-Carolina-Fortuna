import React from "react";
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import {goToLogin} from '../../routes/coordinator'
import { useProtectedPage } from "../../hooks/useProtectedPage";


export function TripDetailsPage (){
    const navigate = useNavigate();

    const [planet, setPlanet] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [approvedCandidates, setApprovedCandidates] = useState([]);
    const [candidates, setCandidates] = useState([]);
    // useProtectedPage()
    useEffect(()=>{
        
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-fortuna/trip/8iOVdQZs7BXjH4H9tYaJ';
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

