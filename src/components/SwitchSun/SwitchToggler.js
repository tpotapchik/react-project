import React from 'react';

const SwitchToggler = ({toggleTheme}) => {
    return (
        <button className="switch-block-button" onClick={toggleTheme}>Switch</button>
    )
};

export default SwitchToggler;