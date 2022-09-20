import { baseURL } from './baseURL';
import axios from "axios";

type TypeSubscribers = {
    id:string,
    name: string,
    email: string
  }
/*
- Exercício 5
    
    Agora, implemente uma função que receba um array de usuários e uma mensagem 
    e envie essa mensagem como notificação para todos os usuários. A princípio, não utilize o `Promise.all`

*/

const getAllSubscribers = async (): Promise<TypeSubscribers[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
  }

const getSubscribersIds = (subscribers: TypeSubscribers[]): string[] =>{
    return subscribers.map((subscriber:TypeSubscribers)=>{
        return subscriber.id
    })
}

const notifyAllSubscribers = async (ids: string[]):Promise<void> =>{
    try{
        for(const id of ids){
           await  axios.post(`${baseURL}/notifications`, {
                subscriberID: id,
                message: "Buonacera Katucha, nova notícia pra você"
            })
            console.log(`Enviado com sucesso`)
        }
    }
    catch (error: any) {
     console.log(` Error ao enviar`)
        }
}



const main = async():Promise<void> =>{
    try{

        const subscribers = await getAllSubscribers()
        const subscriberIds =  getSubscribersIds(subscribers)
        await notifyAllSubscribers(subscriberIds)
    }
    catch(error:any){
        const resp = error.response.data || error.message
         console.log(resp)
    }
}

main ()




