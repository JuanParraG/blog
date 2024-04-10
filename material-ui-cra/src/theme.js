import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import '@fontsource/fira-sans';
import '@fontsource/montserrat';
import '@fontsource/anonymous-pro';
// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    // Configura 'Fira Sans' para títulos y subtítulos
    h1: {
      fontFamily: 'Fira Sans, sans-serif',
    },
    h2: {
      fontFamily: 'Fira Sans, sans-serif',
    },
    h3: {
      fontFamily: 'Fira Sans, sans-serif',
    },
    h4: {
      fontFamily: 'Fira Sans, sans-serif',
    },
    h5: {
      fontFamily: 'Fira Sans, sans-serif',
    },
    // Configura 'Montserrat' para texto y subtítulos secundarios
    subtitle1: {
      fontFamily: 'Montserrat, sans-serif',
    },
    subtitle2: {
      fontFamily: 'Montserrat, sans-serif',
    },
    body1: {
      fontFamily: 'Montserrat, sans-serif',
    },
    body2: {
      fontFamily: 'Montserrat, sans-serif',
    },
    // Configura 'Anonymous Pro' para ejemplos y código
    code: {
      fontFamily: 'Anonymous Pro, monospace',
    },
  },
});

export default theme;
