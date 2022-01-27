import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './ComboBox.css'

const options = [
    "가나다순",
    "평점순",
    "방문 오래된 순"
];

function ComboBox() {
    return (
        <div className="combo-box">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="정렬" />}
            />
        </div>
    );
}

export default ComboBox;