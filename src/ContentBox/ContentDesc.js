import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import AdditionalDesc from './AdditionalDesc'

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
                    {/* <AdditionalDesc text={` — ${props.menus.join(', ')} 등\n${props.recent}  ⭐${props.rate}`} /> */}
                    <AdditionalDesc
                        level="full"
                        menus={props.menus}
                        recent={props.recent}
                        rate={props.rate}
                    />
                </React.Fragment>
            }
        />
    );
}

export default ContentDesc;