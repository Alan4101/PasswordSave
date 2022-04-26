import styled from 'styled-components';
import { theme } from '../../../theme';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${theme.palette.background.default};
`;
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
export const HeaderBox = styled.div`
  width: 100%;
`;
