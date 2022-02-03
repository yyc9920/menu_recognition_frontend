import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import ContentDesc from './ContentDesc';

function ContentBox(props) {
    return (
        <div className="restaurant" key={props.restaurant.name}>
            <ListItem alignItems="flex-start">
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt={props.restaurant.name} src={props.restaurant.imgUrl} />
                    </ListItemAvatar>
                    <ContentDesc
                        name={props.restaurant.name}
                        category={props.restaurant.category}
                        menus={props.restaurant.menus}
                        recent={props.restaurant.recent}
                        rate={props.restaurant.rate}
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
    );
}

export default ContentBox;