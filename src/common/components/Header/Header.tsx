import { FC } from 'react';
import { MainLogo } from '../../assets/icons/MainLogo';
import { Navigation } from '../Navigation/Navigation';
import { HeaderBox, HeaderContainer, HeaderWrapper } from './Header.style';

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {/* logo */}
        <HeaderBox>
          <MainLogo />
        </HeaderBox>
        <HeaderBox>
          {/* menu */}
          <Navigation></Navigation>
        </HeaderBox>
        <HeaderBox>
          <button>Login</button>
        </HeaderBox>
        {/* sig in/ sign up */}
      </HeaderWrapper>
    </HeaderContainer>
  );
};
