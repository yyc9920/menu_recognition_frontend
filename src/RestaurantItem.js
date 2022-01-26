import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

let restaurants = [
    {
        name: "제주산방식당",
        imgUrl: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210705_122%2F1625411810687y4FdQ_JPEG%2F-sMjseZ0Tby4jTlFoed6nMO8.jpeg.jpg",
        category: ["한식", "국수"],
        menus: ["온면", "김치찌개"],
        recent: "22.01.25",
        rate: 3.9,
    },
    {
        name: "던킨 도너츠",
        imgUrl: "https://mblogthumb-phinf.pstatic.net/20160427_52/ppanppane_1461740975298hwnLF_PNG/%B4%F8%C5%B2%B7%CE%B0%ED_%282%29.png?type=w800",
        category: ["후식", "제과"],
        menus: ["크리스피 도넛", "커피"],
        recent: "22.01.20",
        rate: 4.1,
    },
    {
        name: "북촌손만두",
        imgUrl: "https://cdn.myfranchise.kr/images/7m/7mk1vUYZbcLPTSywCn11ax.png?w=196&h=196&c=1&f=jpg",
        category: ["한식", "만두"],
        menus: ["만두국밥", "피냉면"],
        recent: "22.01.22",
        rate: 4.5,
    },
];

function RestaurantItem() {
    const [restaurant, setRestaurant] = React.useState([]);

    React.useEffect(() => {
        setRestaurant(restaurants);
    }, []);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                                        {` — ${res.menus.join(', ')} 등`}
                                        {`${res.recent}  ⭐${res.rate}`}
                                    </React.Fragment>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </div>
            ))}
        </List>
    );
}

export default RestaurantItem;
