import React, {useContext} from 'react';
import {ThemeContext} from './SwitchTheme';
import SwitchToggler from './SwitchToggler';

const SwitchComponent = () => {
    const context = useContext(ThemeContext);
    return (
        <div className="switch-block" style={{background: context.theme.backgroundColor}}>
            <div className="switch-block-sun" style={{background: context.theme.foreground}}></div>
            <SwitchToggler toggleTheme={context.toggleTheme}/>
        </div>
    )
};

export default SwitchComponent;