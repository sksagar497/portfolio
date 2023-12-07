// themes.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
      
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64b5f6',
    },
    secondary: {
      main: '#ff80ab',
    },
  },
});

export const yellowTheme = createTheme({
  palette: {
    mode: 'light', // or 'dark' based on your preference
    primary: {
      main: '#ffeb3b', // Yellow color
    },
    secondary: {
      main: '#ff9800', // Another shade of orange
    },
  },
});
