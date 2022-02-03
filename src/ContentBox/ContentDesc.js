import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

function NewlineText(props) {
    const text = props.text;
    return <div className="newlineText">{text}</div>;
}

function ContentDesc(props) {
    return (
        <ListItemText
            primary={props.name}
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {props.category.join(', ')}
                    </Typography>
                    <NewlineText text={` — ${props.menus.join(', ')} 등\n${props.recent}  ⭐${props.rate}`} />
                </React.Fragment>
            }
        />
    );
}

export default ContentDesc;