import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import restart from 'assets/redo-icon.svg';

const Timer = () => {

    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let timer = null;
        if (running) {
            timer = setTimeout(() => setSeconds(seconds => seconds + 1), 1000);
        } else {
            clearTimeout(timer);
        }
        return () => clearTimeout(timer);
    });

    function reset() {
        setRunning(false);
        setSeconds(0);
    }

    function toggleRunning() {
        setRunning(!running);
    }

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

    return (
        <div className="timer">
            <div className={classnames("timer-action", {"pause": running})} onClick={toggleRunning}></div>
            <div className="timer-result">{parseSecondsToUserFriendly(seconds)}</div>
            <div className="timer-reset" onClick={reset}>
                <img src={restart} alt="Restart"/>
            </div>
        </div>
    )
};

export default Timer;