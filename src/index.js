import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

// Define CSS variables for consistent color management
const cssVariables = {
  '--color-primary': '1, 41, 99',
  '--color-primary-blue': '36, 60, 132',
  '--color-white': '255, 255, 255',
  '--color-text-light': '232, 232, 232',
  '--color-dark-red': '162, 0, 0',
  '--color-black': '0, 0, 0',
  '--color-red': '218, 34, 34',
  '--color-bg-grey': '230, 230, 230',
  '--color-dark': '3, 32, 82',
};

const nidotheme = createTheme({
  palette: {
    primary: {
      main: "#be0000",
      // Adding variables as references
      primaryRgb: cssVariables['--color-primary'],
      primaryBlue: cssVariables['--color-primary-blue'],
      darkRed: cssVariables['--color-dark-red'],
      red: cssVariables['--color-red'],
      dark: cssVariables['--color-dark'],
    },
    common: {
      white: `rgb(${cssVariables['--color-white']})`,
      black: `rgb(${cssVariables['--color-black']})`,
      textLight: cssVariables['--color-text-light'],
      bgGrey: cssVariables['--color-bg-grey'],
    }
  },
  typography: {
    fontFamily: 'Barlow, sans-serif;',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          ${Object.entries(cssVariables).map(([key, value]) => `${key}: ${value};`).join('\n          ')}
        }
      `,
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: '1240px',
          paddingLeft: '20px',
          paddingRight: '20px',
          '@media (max-width: 600px)': {
            paddingLeft: '15px',
            paddingRight: '15px',
          },
          '@media (min-width: 600px)': {
            paddingLeft: '20px',
            paddingRight: '20px',
          },
          '@media (min-width: 1200px)': {
            maxWidth: '1240px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '15px',
        }
      },
    }, 
  },
});

const root = ReactDOM.createRoot(document.getElementById('nidoRoot'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={nidotheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
