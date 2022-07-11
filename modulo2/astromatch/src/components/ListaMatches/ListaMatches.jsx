import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Foto, Match} from './styles'




export function ListaMatches(props){
   
   
    // const [nome, setNome] = useState('');
    // const [foto, setFoto] = useState('');
    const [lista, setLista] = useState([]);
 
      //declaração de constantes da API
  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina';

    const getMatches = () => {
        axios.get(`${url}/matches`)
        .then((res) => {
            return setLista(res.data.matches),
            console.log(res.data.matches.name)    
        })
        .catch((err) => {
            alert(err.message)
        })
    }

     //useeffect para puxar dados assim que o componente renderizar
  useEffect(() => {
    getMatches()
  },lista);
//   console.log(lista);

  let Lista= () =>{ 
    lista.map((lista)=>{
        return  console.log(lista.name)
      })
  }

//   const botaoReset = () =>{
//       if(props.botaoLimpar){
//           renderizaLista()
//       }
//   }

  const renderizaLista = lista.map((item)=>{
          return  <Match>
          <Foto src={item.photo} alt={item.photo_alt} />
          <p>{item.name}</p>    
          </Match>
        })
    


    return(
        <div>
       {renderizaLista}
       {Lista}
   
        </div>

    );
}

export default ListaMatches;