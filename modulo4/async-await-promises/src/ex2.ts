import { baseURL } from './baseURL';
import axios from "axios";
import express, { response } from "express";


import { AddressInfo } from "net";

const app = express();

app.use(express.json());


// *a.* Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e 
//uma arrow function assíncrona
//Na função nomeada a palavra reservada async vai antes de tudo e não tem a arrow
//na arrow function assync vai depois do simbolo ' = ' (atribuição)

// b. Implemente a função solicitada, usando arrow function

const getAllSubscribers = async(): Promise<any[]> =>{
    const response = await axios.get(`${baseURL}/subscribers`)

    return response.data
  
}

const main = async():Promise<void> =>{
    try{
        console.log(await getAllSubscribers())
      
    }
    catch(error:any){
        const resp = error.responde.data || error.message
        console.log(resp)
    }
}

main ()