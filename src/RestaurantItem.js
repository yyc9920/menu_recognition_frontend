import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import restaurants from './RestaurantList';
import './RestaurantItem.css';

function NewlineText(props) {
    const text = props.text;
    return <div className="newlineText">{text}</div>;
}

function RestaurantItem() {
    const [restaurant, setRestaurant] = React.useState([]);

    React.useEffect(() => {
        setRestaurant(restaurants);
    }, []);

    return (
        <div className="restaurantsList">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Divider variant="inset" component="li" />
                {restaurant.map((res) => (
                    <div className="restaurant" key={res.name}>
                        <ListItem alignItems="flex-start">
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar alt={res.name} src={res.imgUrl} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={res.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {res.category.join(', ')}
                                            </Typography>
                                            <NewlineText text={` — ${res.menus.join(', ')} 등\n${res.recent}  ⭐${res.rate}`} />
                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                ))}
            </List>
        </div>
    );
}

export default RestaurantItem;
