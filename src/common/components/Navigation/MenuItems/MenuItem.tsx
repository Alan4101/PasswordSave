import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ListItemButton, ListItemText } from '@mui/material';

import { checkIsActiveItem, IMenuItem, useStyles } from '../Navigation.helper';

interface MenuItemProps {
  item: IMenuItem;
  itemClikHandler: () => void;
}
export const MenuItem: FC<MenuItemProps> = ({ item, itemClikHandler }) => {
  const { pathname } = useLocation();
  const [isActiveItem, setIsActiveItem] = useState<boolean>(true);

  const classes = useStyles({
    active: isActiveItem,
  });
  useEffect(() => {
    setIsActiveItem(checkIsActiveItem(pathname, item.route));
  }, [pathname, item]);
  const onClickItemHandler = () => {
    itemClikHandler();
  };
  return (
    <Link className={classes.menuItemWrapper} to={item.route}>
      <ListItemButton
        classes={{ root: classes.root, selected: classes.selected }}
        selected={isActiveItem}
        onClick={onClickItemHandler}
      >
        {item.icon && item.icon}
        {!!item.icon ? (
          <ListItemText
            disableTypography
            style={{ paddingLeft: '10px' }}
            className={classes.text}
            primary={item.text}
          />
        ) : (
          <ListItemText disableTypography className={classes.text} primary={item.text} />
        )}
      </ListItemButton>
    </Link>
  );
};
