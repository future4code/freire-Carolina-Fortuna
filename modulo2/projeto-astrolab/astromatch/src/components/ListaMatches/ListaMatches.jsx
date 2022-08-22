import React from 'react';
import { useState } from 'react';
import { Foto, Match} from './styles'








export function ListaMatches(){
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');
    return(
        <div>
        <Match>
            <Foto src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Buzz_Aldrin.jpg/800px-Buzz_Aldrin.jpg" alt="" />
            <p>Buzz Aldrin</p>
            
        </Match>
   
        </div>

    );
}

export default ListaMatches;