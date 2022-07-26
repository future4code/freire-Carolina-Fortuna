
import { roseColor, orangeColor, blueColor, greenColor } from './colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
     
      main: roseColor,
      contrasText: 'white'
   
    },
  
    secondary: {
        main: orangeColor,
        contrasText: 'white'
    },

    white: {
        main:'white'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
});

export default theme