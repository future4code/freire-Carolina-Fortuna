import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';





function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp2.licdn.com/dms/image/C4E03AQFaJHA6_2fu8A/profile-displayphoto-shrink_200_200/0/1579930268738?e=1660176000&v=beta&t=xdKGwoEw2hdaZGZR3suYXREJXM2Ll0n29WuLHlz51xU" 
          nome="Carolina Fortuna" 
          descricao="Oi, eu sou a Carol, eu amo programar e estou estudando para me tornar uma desenvolvedora Web Full Stack."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/128/608/premium/608258.png?token=exp=1654650993~hmac=1c7f2f20841dfb2010f2b2b0190280b2" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno
      imagem= 'https://cdn-icons.flaticon.com/png/128/3178/premium/3178158.png?token=exp=1654652255~hmac=6f755edecd202c6fd29ab02e2e96281f'
      requeri='E-mail:'
      info=' carolina_melhor_dev@hotmail.com'
      />
      <CardPequeno
      imagem='https://cdn-icons.flaticon.com/png/128/5774/premium/5774554.png?token=exp=1654652595~hmac=f4e052ede08b58cbf27e0040865551ad'
      requeri='Endereço:'
      info=' Rua dos Bobos, Nº: 0'
      />
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp2.licdn.com/dms/image/C4E0BAQHN68osUoFKGA/company-logo_200_200/0/1625764040369?e=1662595200&v=beta&t=yZi7DzehYfsmm6llScA8Z-JE2vRpm9169tDawNkEWo8" 
          nome="Labenu" 
          descricao="Bootcamp com duração de seis meses de formação full stack, em desenvolvomento web e em linguagem Javascript" 
        />
        
        <CardGrande 
          imagem="https://media-exp2.licdn.com/dms/image/C4E0BAQGXuhKRcgtuuw/company-logo_200_200/0/1627050591313?e=1662595200&v=beta&t=r6TIo6rnsNRec2-OyMVRkEMGqAD4GVjs5Pn0c4rKd5U" 
          nome="AMBEV - Refrigerantes Sapucaia/RS" 
          descricao="Estágio na área de egenharia, atuei no setor de automação e no setor de utilidades. Até que depois de sete meses pedi para sair pois
          não queria passar a vida toda preenchendo tabelas no excel" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
