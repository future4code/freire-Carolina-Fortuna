import { baseURL } from './baseURL';
import axios from "axios";
import express, { response } from "express";


import { AddressInfo } from "net";

const app = express();

app.use(express.json());


// *a.* Qual endpoint você deve utilizar para isso?

//GET/news

// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
//:Promise<any>

// c. Implemente uma função nomeada que faça o que foi pedido.

// const getAllSubscribers = async(): Promise<any[]> =>{
//     const response = await axios.get(`${baseURL}/subscribers`)

//     return response.data
  
// }

async function getAllSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

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

// const server = app.listen(process.env.PORT || 3003, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });;