import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import ContentBox from './ContentBox'
import restaurants from './RestaurantList';
import './RestaurantItem.css';

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
                    <ContentBox restaurant={res} />
                ))}
            </List>
        </div>
    );
}

export default RestaurantItem;
