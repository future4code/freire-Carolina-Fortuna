import * as React from 'react';

import { Div } from './styles';


import Button from '@mui/material/Button';


import Logo from '../../assets/logo.png'

export default function Header() {
  return (
      <Div>
    
          
        
       
         <img src={Logo} alt="" />
         <Button variant="contained"  color='secondary'>Login</Button>
         </Div>
        
  );
}
