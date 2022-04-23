import { ReactElement } from 'react';
import { WebsiteRoutes } from '../../constants/routes';
import { MenuStrings } from '../../localization/en';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const checkIsActiveItem = (pathname: string, route: string): boolean => {
  return pathname.indexOf(route) === 0;
};
interface subMenuItem {
  icon?: ReactElement;
  text: string;
  route: string;
  notification?: number;
  isPrivateRoute: boolean;
}
export interface IMenuItem {
  text: string;
  route: string;
  isPrivateRoute: boolean;
  notification?: number;
  isSubMenu?: subMenuItem[];
}
export const menuItems: IMenuItem[] = [
  {
    text: MenuStrings.Home,
    route: WebsiteRoutes.Home,
    isPrivateRoute: false,
  },
  {
    text: MenuStrings.About,
    route: WebsiteRoutes.About,
    isPrivateRoute: false,
  },
  {
    text: MenuStrings.MyPasswords,
    route: WebsiteRoutes.Passwords,
    isPrivateRoute: true,
  },
];
export const useStylesList = makeStyles(() => ({
  root: {
    display: 'inherit',
    width: '100%',
    flexDirection: 'inherit',
  },
}));
export const useStyles = makeStyles<Theme, { active: boolean }>((theme) => ({
  menuItemWrapper: {
    display: 'block',
    width: '150px',
    color:`${theme.palette.primary.contrastText}`,
    
  },
  root: {
    textAlign: `center`,
  },
  selected: {
    color: `${theme.palette.primary.dark}`,
  },
  text: (props) => ({
    color: `${props.active ? theme.palette.secondary.main : theme.palette.secondary.contrastText} !important`,
    whiteSpace: 'nowrap',
    textAlign: 'center',

  }),
}));
