import React from 'react';
import {useState} from 'react'
import { HeaderBar } from './styles';
import { useNavigate } from 'react-router-dom';
import {goToLogin} from '../../routes/coordinator'

import Logo from '../../assets/logo.png'

export default function Header() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [rightButton, setButton] = useState(token ? 'Logout': 'Entrar')
 
  const logout = () =>{
    localStorage.removeItem('token')
  }

  const rightButtonAction = () =>{
    if(token) {
      logout()
      setButton('Entrar')
      goToLogin(navigate)
    }
    else {
      goToLogin(navigate)
    }
  }
  return (
      <HeaderBar>
         <img src={Logo} alt="" />
        <button 
        onClick={rightButtonAction} 
        >{rightButton}</button>
         </HeaderBar>
        
  );
}
