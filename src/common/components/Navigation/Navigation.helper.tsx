import { ReactElement } from 'react';
import { WebsiteRoutes } from '../../constants/routes';
import { MenuStrings } from '../../localization/en';
import { Theme, List ,ListProps , styled} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { styled } from '@mui/material/styles';

export const checkIsActiveItem = (pathname: string, route: string): boolean => {
  return pathname.indexOf(route) === 0;
};
interface IMenu {
  icon?: ReactElement;
  text: string;
  route: string;
  isPrivateRoute: boolean;
}
interface subMenuItem extends IMenu {
  notification?: number;
}
export interface IMenuItem extends IMenu {
  notification?: number;
  isSubMenu?: subMenuItem[];
}


export const authMenu: IMenuItem[] = [
  {
    icon: <AccountCircleIcon/>,
    text: MenuStrings.SignIn,
    route: WebsiteRoutes.LogIn,
    isPrivateRoute: false,
  },
  {
    icon: <AccountCircleIcon/>,
    text: MenuStrings.Register,
    route: WebsiteRoutes.Registration,
    isPrivateRoute: false,
  },
  {
    icon: <LoginIcon />,
    text: MenuStrings.LogOut,
    route: WebsiteRoutes.LogOut,
    isPrivateRoute: true,
  },
];
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
    display: 'flex',
    alignItems: 'center',
    
    width: '170px',
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor: 'transparent !important',
  },
  root: {
    textAlign: `center`,
    '&:hover': {
      backgroundColor: 'transparent !important',
      color: `${theme.palette.primary.light}`,
      transition: 'all .3ms ease',
    },
  },
  selected: {
    backgroundColor: 'transparent !important',
    color: `${theme.palette.primary.light} !important`,
  },
  text: {
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
}));
export const ListMenu = styled(List)<ListProps>(({theme})=>({
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    width: "100%",
   
}))
