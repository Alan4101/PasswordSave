import { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ListItemButton, ListItemText } from '@mui/material';

import { checkIsActiveItem, IMenuItem, useStyles } from '../Navigation.helper';

interface MenuItemProps {
  item: IMenuItem;
  itemClikHandler: () => void;
}
export const MenuItem: FC<MenuItemProps> = ({ item, itemClikHandler }) => {
  const { pathname } = useLocation();
  const [isActiveItem, setIsActiveItem] = useState<boolean>(false);

  const classes = useStyles({
    active: isActiveItem,
  });
  useEffect(() => {
    setIsActiveItem(checkIsActiveItem(pathname, item.route));
    console.log(isActiveItem)
  }, [pathname, item]);
  const onClickItemHandler = () => {
    itemClikHandler();
  };
  return (
    
      <NavLink className={classes.menuItemWrapper} to={item.route}>
        <ListItemButton
          classes={{ root: classes.root, selected: classes.selected }}
          selected={isActiveItem}
          onClick={onClickItemHandler}
        >
          <ListItemText disableTypography className={classes.text} primary={item.text} />
        </ListItemButton>
      </NavLink>
    
  );
};
