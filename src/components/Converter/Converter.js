import React, {Component} from "react";

const course = 2.5;

export default class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            byn: 0,
            usd: 0
        };
    }

    onChangeHandler = (e) => {
        if (e.target.name === 'byn') {
            this.setState({byn: e.target.value, usd: e.target.value / course})
        }
        else {
            this.setState({byn: e.target.value * course, usd: e.target.value})
        }
    };

    render() {
        return (
            <form>
                <label>USD:</label>
                <NumberInput
                name="usd"
                value={this.state.usd}
                onHandleChange={this.onChangeHandler}
                />
                <br />

                <label>BYN:</label>
                <NumberInput
                name="byn"
                value={this.state.byn}
                onHandleChange={this.onChangeHandler}
                />
            </form>
        );
    }
}

class NumberInput extends Component {
    onHandleChange = (e) => {
        this.props.onHandleChange(e);
    };

    render() {
        return (
            <input
                type="number"
                name={this.props.name}
                value={this.props.value}
                onChange={this.onHandleChange}
            />
        );
    }
}