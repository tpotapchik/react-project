import React from 'react';

export const AppTheme = {
    light: {
        foreground: 'yellow',
        backgroundColor: 'black',
    },
    dark: {
        foreground: 'lightgrey',
        backgroundColor: 'grey',
    },
};

export const ThemeContext = React.createContext(
    AppTheme.dark
);