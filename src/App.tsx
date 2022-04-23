import {FC}from 'react';
import {  ThemeProvider } from '@mui/material/styles';
import './App.css';
import { theme } from './theme';
import { Layout } from './common/components/Layout/Layout';

const App:FC=()=> {
  return (
    <ThemeProvider theme={theme}>
     <Layout></Layout>
    </ThemeProvider>
    
  );
}

export default App;
