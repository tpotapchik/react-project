import React from 'react';

import './TextInput.scss';

const TextInput = (props) => {
    const {name, autoComplete, onHandleChange} = props;

    return (
        <input
            type="text"
            name={name}
            autoComplete={autoComplete}
            onChange={onHandleChange}
        />
    );
};

export default TextInput;