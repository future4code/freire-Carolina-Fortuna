import axios from 'axios'
import {BASE_URL} from '../constants/urls'



export const createPost = (body, clear) =>{
    const url = `${BASE_URL}/posts`
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        }
    }
   
  
    console.log(url)
    console.log(body)
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


