import React from 'react';
import {useState} from 'react'
import { HeaderBar } from './styles';
import { useNavigate } from 'react-router-dom';
import {goToLogin} from '../../routes/coordinator'
import x from '../../assets/x.png'
import { useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png'

export default function Header() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [rightButton, setRightButton] = useState(token ? 'Logout': 'Entrar')

const location = useLocation()
const leftButton = () =>{
  if (location.pathname == `/post/:id`)
  return  <img src={x} />
}
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
    
       {leftButton}
         <img src={Logo} alt="" />
        <button 
        onClick={rightButtonAction} 
        >{rightButton}</button>
         </HeaderBar>
        
  );
}
