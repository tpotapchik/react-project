import React from 'react';
import classnames from 'classnames';
import restart from 'assets/redo-icon.svg';

function convertToDoubleDigit(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
}

function parseSecondsToUserFriendly(secondsCount) {
    let hours;
    let minutes;
    let seconds;
    const secondsInMinutes = 60;
    const minutesInHour = 60;

    minutes = Math.floor(secondsCount / secondsInMinutes);
    hours = Math.floor(minutes / minutesInHour);
    seconds = secondsCount - minutes * secondsInMinutes;

    let hoursString = "";
    if (hours > 0) {
        hoursString = convertToDoubleDigit(hours) + ':';
    }

    return hoursString + convertToDoubleDigit(minutes) + ':' + convertToDoubleDigit(seconds);
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0, running: false};
        this.timer = null;
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    setSeconds = (seconds) => {
        this.setState({seconds: seconds});
    };

    reset = () => {
        this.setState({
            running: false
        });
        this.setSeconds(0);
    };

    toggleRunning = () => {
        this.setState((state) => {
            return {running: !state.running}
        });
    };

    componentDidUpdate() {
        if (this.state.running) {
            this.timer = setTimeout(() => this.setSeconds(this.state.seconds + 1), 1000);
        } else {
            clearTimeout(this.timer);
        }
    }

    render() {
        const {seconds, running} = this.state;
        return (
            <div className="timer">
                <div className={classnames("timer-action", {"pause": running})} onClick={this.toggleRunning}></div>
                <div className="timer-result">{parseSecondsToUserFriendly(seconds)}</div>
                <div className="timer-reset" onClick={this.reset}>
                    <img src={restart} alt="Restart"/>
                </div>
            </div>
        );
    }
}

export default Timer;
