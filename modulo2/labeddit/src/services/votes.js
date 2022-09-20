import axios from 'axios'
import {BASE_URL} from '../constants/urls'



export const vote = (id,x, direction) =>{
    const url = `${BASE_URL}/${x}/${id}/votes`

   const body = {
	"direction": Number(`${direction}`)
}
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        }
    }
   
    console.log(url)
    console.log(id)
    console.log(body)
    console.log(headers)
 
    axios.post(url, body, headers)
    .then((response)=>{
        console.log(response.data)      
    })
    .catch((error)=>{
        console.error(error)
        alert('Erro ao registrar voto, tente novamente.')
    })
}

export const deleteVote = (id, x) =>{
    const url = `${BASE_URL}/${x}/${id}/votes`

   
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        }
    }
   
    console.log(url)
    console.log(id)

    console.log(headers)
 
    axios.post(url, headers)
    .then((response)=>{
        console.log(response)      
    })
    .catch((error)=>{
        console.error(error)
        alert('Erro ao deletar voto, tente novamente')
    })
}
