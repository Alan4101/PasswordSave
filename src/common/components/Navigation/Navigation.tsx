import { FC } from "react";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export const Navigation:FC = () => {
    return(
        <MenuList>
            <MenuItem>
                <ListItemText>cut</ListItemText>
            </MenuItem>
        </MenuList>
        
    )
}