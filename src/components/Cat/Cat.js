import React, {Component} from 'react';
import icon from 'assets/cat.png';

class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src={icon} style={{position: 'fixed', left: mouse.x, top: mouse.y}} />
        );
    }
}

export default Cat;