import { FC, useState } from 'react';
import { Grid } from '@mui/material';
import { NavBox } from './Navigation.style';
import { authMenu, IMenuItem, ListMenu, menuItems} from './Navigation.helper';
import { MenuItem } from './MenuItems/MenuItem';

export const Navigation: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  // const classes = useStylesList();

  const renderMenuItems = (arr: Array<IMenuItem>) => {
    if (isAuth) {
      return arr.map((item) => (
        <MenuItem key={item.route} item={item} itemClikHandler={() => console.log(item.text)} />
      ));
    } else {
      return arr
        .filter((item) => !item.isPrivateRoute)
        .map((item) => (
          <MenuItem key={item.route} item={item} itemClikHandler={() => console.log(item.text)} />
        ));
    }
  };
  const renderAuthMenu = () =>
    isAuth
      ? authMenu
          .filter((item) => item.isPrivateRoute)
          .map((item) => (
            <MenuItem key={item.route} item={item} itemClikHandler={() => console.log(item.text)} />
          ))
      : authMenu
          .filter((item) => !item.isPrivateRoute)
          .map((item) => (
            <MenuItem key={item.route} item={item} itemClikHandler={() => console.log(item.text)} />
          ));
  return (
    <NavBox sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ListMenu>{renderMenuItems(menuItems)}</ListMenu>
        </Grid>
        <Grid item xs={4}>
          <ListMenu>{renderAuthMenu()}</ListMenu>
        </Grid>
      </Grid>
    </NavBox>
  );
};
