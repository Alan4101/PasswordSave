import { FC } from 'react';
import { MainLogo } from '../../assets/icons/MainLogo';
import { Navigation } from '../Navigation/Navigation';
import { HeaderContainer, HeaderWrapper } from './Header.style';
import { Grid} from '@mui/material';

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Grid container spacing={2}>
          <Grid item xs={1} display="flex" alignItems="center">
            <MainLogo />
          </Grid>
          <Grid item xs={11}>
            <Navigation />
          </Grid>
        </Grid>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
