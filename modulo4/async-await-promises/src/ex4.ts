import { baseURL } from './baseURL';
import axios from "axios";



type newsType ={
    title: string,
    content: string,
    date: number
}

const news = {
    title: "ABAFA",
    content: "AFABA",
    date: Date.now()
 }


/*
- Exercício 4
    
    Vamos continuar as nossas funcionalidades da API. Crie uma função que permita criar uma nova notícia.
    
    *a.* Qual é o tipo dessa função? Por quê?
   É do tipo void, pois não retorna uma variável 
    
    b. Implemente a função solicitada
*/

const createNews = async (news:newsType): Promise<void> =>{
     return axios.put(`${baseURL}/news`, news)
}


const main = async():Promise<void> =>{
    try{
       createNews(news)
      
    }
    catch(error:any){
        const resp = error.responde.data || error.message
        console.log(resp)
    }
}

main ()




