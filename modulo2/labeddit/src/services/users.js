import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { goFeed } from '../routes/coordinator'


export const login = (body, clear, navigate) =>{
    const url = `${BASE_URL}/users/login`
    const myHeaders = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
 console.log(body)
 console.log(url)
 console.log(myHeaders)
 
    axios.post(url, body, myHeaders)
    .then((response)=>{
        console.log(response)
        localStorage.setItem('token', response.data.token)
        clear()
        goFeed(navigate)  
        
    })
    .catch((error)=>{
        console.log(error)
        alert(error.message)
    })
}



export const signUp = (body, clear, navigate) =>{
    const url = `${BASE_URL}/users/signup`
    const myHeaders = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
 
    axios.post(url,  body, myHeaders)
    .then((response)=>{
        console.log(response)
        localStorage.setItem('token', response.data.token)
        clear()
        goFeed(navigate)
    })
    .catch((error)=>{
        console.log(error)
    })
}

