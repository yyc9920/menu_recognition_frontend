import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import ContentBox from './ContentBox/ContentBox';
import restaurants from './RestaurantList';
import './RestaurantItem.css';

function RestaurantItem(props) {
    const [restaurant, setRestaurant] = React.useState([]);

    React.useEffect(() => {
        setRestaurant(restaurants);
    }, []);

    if(props.sortType === "가나다순") {
        console.log(props.sortType);
        restaurant.sort(function(a, b) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
    } else if(props.sortType === "평점순") {
        console.log(props.sortType);
        restaurant.sort(function(a, b) {
            return b.rate - a.rate;
        });
    } else if(props.sortType === "방문 오래된 순") {
        console.log(props.sortType);
        restaurant.sort(function(a, b) {
            return new Date(a.recent) - new Date(b.recent);
        });
    }

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
