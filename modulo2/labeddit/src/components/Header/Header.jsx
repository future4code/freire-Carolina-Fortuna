import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//estiização
import { HeaderBar } from './styles';

//rota
import {goToLogin} from '../../routes/coordinator'

//imagem
import Logo from '../../assets/logo.png'

export default function Header() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [rightButton, setRightButton] = useState(token ? 'Logout': 'Entrar')


  const logout = () =>{
    localStorage.removeItem('token')
  }

  const rightButtonAction = () =>{
    if(token) {
      logout()
      setRightButton('Entrar')
      goToLogin(navigate)
    }
    else {
      goToLogin(navigate)
    }
  }
  return (
    
      <HeaderBar>
    
         <img src={Logo} alt="Labeddit" />
        <button 
        onClick={rightButtonAction} 
        >{rightButton}</button>
         </HeaderBar>
        
  );
}
