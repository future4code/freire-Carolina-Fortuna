import React from "react";
import Router from './routes/Router'
import {Background, Div} from './components/BackgroundMobile/styles'

function App() {
  return (
    <Background>
      <Div>
      <Router/>
      </Div>
    </Background>
  );
}

export default App
