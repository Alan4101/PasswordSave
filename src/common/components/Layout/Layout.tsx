import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer, MainWrapper } from '../../styles/commonStyles';
import { Header } from '../Header/Header';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../theme';


export const Layout: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Header></Header>
        <MainWrapper>
          <Outlet />
        </MainWrapper>
      </MainContainer>
    </ThemeProvider>
  );
};
