import { baseURL } from './baseURL';
import axios from "axios";

type user = {
    id: string,
    name: string,
    email: string
}

/*- Exercício 3
    
Agora, vamos melhorar um pouco a nossa função, criando uma tipagem que represente os assinantes da 
nossa aplicação. No nosso caso, eles possuem um `id`, `name` e `email`,



*a.* Se apenas trocarmos o retorno da função para: `Promise<user[]>` , teremos algum erro de tipagem?
Não, inclusive é melhor que a função seja tipada corretamente em vez de tipar como any[]

b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne
 um `Promise<any>`. Explique com as suas palavras o porquê de fazermos isso
 por que a função não está tipada para retornar um array, então é necesario fazer um map e retornar item por item

c. Reimplemente a função, corretamente. */


async function getAllSubscribers(): Promise<user[]> {
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




