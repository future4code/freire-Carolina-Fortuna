import React from "react";
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios'
import { goBack } from "../../routes/coordinator";
import {Header, Main} from '../ListTripsPage/styles'
import { ApplicationForm } from "./styles";
import logo from '../../img/logo.png'
import {goToLogin} from '../../routes/coordinator'
import { SelectPaises } from "./selectPaises";

export function ApplicationFormPage (){
const navigate = useNavigate()
const [trips, setTrips] = useState([])
const [form, setForm]= useState({name: '', age: 0, applicationText:'', profession:'', country:''})
useEffect(()=>{
        
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-fortuna/trips';
  
    axios.get(url)
    .then((response)=>{

        setTrips(response.data.trips)  
    })
    .catch((error)=>{
        console.log(error.response)
    })
},[])

const submitApplication = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-fortuna/trips/${id}/apply`
    const header = {'Content-Type': 'application/json'}
    const body= {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
    }

    axios.post(url, {headers:{header}}, body)
    .then((response)=>{

        console.log(response)  
        alert('Pronto! Agora é só esperar a resposta do organizador da viagem. Boa sorte!')
    })
    .catch((error)=>{
        console.log(error.response.data)
    })
}


const onChange = (event)=>{
    setForm({...form,[event.target.name]: event.target.value})
}
const optionsTrip= trips.map((item)=>{
    return(
        <option value={item.id} key={item.id}>{item.name} - {item.planet}</option>
     )
      })
    
    return(
        <div>
             <Header>
                <img src={logo} alt="labe-x" onClick={()=>goBack(navigate)} />
                <button onClick={()=>goToLogin(navigate)}>Admin</button>
            </Header>
        
            <Main>
            <ApplicationForm>
                <h2>Preencha com seus dados e por quê você quer viajar:
                </h2>
                <center>
                <form action="">

                <select name="id" 
                placeholder="Viagem"
                value={form.id}
                onChange={onChange}
                required
                
                >
                {optionsTrip}
                </select>   

                <br />
                <input type="text" 
                placeholder="Nome" 
                name="name"
                value={form.name}
                onChange={onChange}
                required
                pattern={'^.{3,}'}
                title='Escreva um nome com mais de 3 letras '
                />
  
                <br />
                <input type="number" 
                placeholder="Idade" 
                name="age"
                value={form.age}
                onChange={onChange}
                required
                pattern={"^(1[89]|[2-9][0-9])$"}
                title='É necessário ter mais de 18 anos para se inscrever'
                />
                <br />
                <input type="text" 
                placeholder="Texto de candidatura" 
                name="applicationText"
                value={form.applicationText}
                onChange={onChange}
                required
                pattern={"^.{30,}$"}
                title=' '
                />
                <br />
                <input type="text" 
                placeholder="Profissão"
                name="profession"
                value={form.profession}
                onChange={onChange}
                required
                pattern={"^.{10,}$"}
                title='O campo profissão deve ter mais de 10 caracteres '
                />
                <br />
               
                {/* <SelectPaises
                onChange={onChange}
                value={form.country}
                name="country"
                /> */}
                
                
                <br />
                <button onClick={()=>submitApplication(form.id)}>Enviar</button> 
                </form>
                </center>
            </ApplicationForm>
<button onClick={()=>goBack(navigate)}>Voltar</button>
</Main>
</div>
    )
}

