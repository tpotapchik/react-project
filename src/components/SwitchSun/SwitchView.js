import React, {Component} from 'react';
import {AppTheme, ThemeContext} from './SwitchTheme';
import './Swith.scss';
import SwitchComponent from './SwitchComponent';

class SwitchView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: AppTheme.dark,
            toggleTheme: this.toggleTheme,
        };
    }

    toggleTheme = () => {
        this.setState(state => ({
            theme: state.theme === AppTheme.dark
                ? AppTheme.light
                : AppTheme.dark
        }));
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <SwitchComponent />
            </ThemeContext.Provider>
        )
    }
}

export default SwitchView;