import React from 'react';

import './HelloWorld.scss';

export default function HelloWorld(props) {

    return (
        <div className="container section">
            <h1 className="user-name">hello {props.userName}</h1>
            <p>ddd</p>
        </div>
    )
}