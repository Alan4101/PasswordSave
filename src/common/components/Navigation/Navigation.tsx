import { FC, useState } from 'react';
import { List } from '@mui/material';
import { NavBox } from './Navigation.style';
import { menuItems, useStylesList } from './Navigation.helper';
import { MenuItem } from './MenuItems/MenuItem';

export const Navigation: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const classes = useStylesList();

  const renderItems = () => {
    if (isAuth) {
      return menuItems.map((item) => (
        <MenuItem key={item.route} item={item} itemClikHandler={() => console.log(item.text)} />
      ));
    } else {
      return menuItems
        .filter((item) => !item.isPrivateRoute)
        .map((item) => <MenuItem key={item.route} item={item} itemClikHandler={() => console.log(item.text)} />);
    }
  };

  return (
    <NavBox>
      <List className={classes.root}>{renderItems()}</List>
    </NavBox>
  );
};
