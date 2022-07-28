import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { useParams } from 'react-router-dom'



export const createComment = (body, clear, id) =>{
   
    const url = `${BASE_URL}/posts/${id}/comments`
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        }
    }
   
    console.log(url)
    console.log(headers)
 
    axios.post(url, body, headers)
    .then((response)=>{
        console.log(response)
        clear();   
        
    })
    .catch((error)=>{
        console.log(error)
        alert('Erro ao postar')
        
 
    })
}

