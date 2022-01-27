import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ListAltIcon from '@mui/icons-material/ListAlt';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <ListAltIcon fontSize="large" className="header__icon" />
            </IconButton>

            <IconButton>
                <RestaurantMenuIcon fontSize="large" className="header__icon restaurant_menu" />
            </IconButton>

            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header;