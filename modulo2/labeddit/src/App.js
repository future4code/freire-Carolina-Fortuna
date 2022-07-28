import React from "react";
import Router from './routes/Router'
import { ThemeProvider } from '@mui/material/styles';
import theme from './constants/theme'
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
