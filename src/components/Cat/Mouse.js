import React, {Component} from 'react';

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };

    render() {
        return (
            <div onMouseMove={this.handleMouseMove} style={{height: '200px'}}>
                <h2>Координаты мыши: x:{this.state.x}, y:{this.state.y}</h2>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse;