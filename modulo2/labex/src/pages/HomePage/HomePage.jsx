import React from "react";
import {useNavigate} from 'react-router-dom'
import {goToListTrips, goToLogin} from '../../routes/coordinator'
import logo from '../../img/logo.png'
import video from '../../img/video2.mp4'
import foguete from '../../img/foguete.png'
import padlock from '../../img/padlock.png'
import {Header, HeaderButton, Main} from './styles.js'




export function HomePage() {
    const navigate = useNavigate();

  
    return (
      <div>
          <Header>
              <img src={logo} alt="labe-x" />
                <section><p>Assine já a nossa Newsletter e receba ofertas exclusivas</p>
                <input type="email" />
                </section>
                <HeaderButton onClick={()=>goToLogin(navigate)}>Admin <img src={padlock}/></HeaderButton>
          </Header>
          <Main>
          <video 
                src={video} autoPlay loop muted/>
           
              <h1 onClick={()=>goToListTrips(navigate)}>Encontre aqui a sua 
             
              próxima viagem espacial</h1>
              <img src={foguete} alt="foguete" onClick={()=>goToListTrips(navigate)} />
         
            
          </Main>
          
     
      </div>
    );
  }
  

  