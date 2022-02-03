import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function NewlineText(props) {
    const text = props.text;
    return <div className="newlineText">{text}</div>;
}

function ContentBox(props) {
    return (
        <div className="restaurant" key={props.restaurant.name}>
            <ListItem alignItems="flex-start">
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt={props.restaurant.name} src={props.restaurant.imgUrl} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.restaurant.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {props.restaurant.category.join(', ')}
                                </Typography>
                                <NewlineText text={` — ${props.restaurant.menus.join(', ')} 등\n${props.restaurant.recent}  ⭐${props.restaurant.rate}`} />
                            </React.Fragment>
                        }
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
    );
}

export default ContentBox;