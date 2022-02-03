import * as React from 'react';

function AdditionalDesc(props) {
    let text;

    if(props.level === "simple") {
        const menus = props.menus.slice(0, 2);
        text = ` — ${menus.join(', ')} 등`;
    } else if(props.level === "full") {
        const menus = props.menus.slice(0, 4);
        text = ` — ${menus.join(', ')} 등\n${props.recent}  ⭐${props.rate}`;
    } else {
        const menus = props.menus.slice(0, 2);
        text = ` — ${menus.join(', ')} 등\n${props.recent}  ⭐${props.rate}`;
    }

    return <div className="newlineText">{text}</div>;
}

export default AdditionalDesc;