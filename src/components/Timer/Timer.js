import React from 'react';
import TimerView from './TimerView';
import TimerViewByClasses from './TimerViewByClasses';

import './Timer.scss';

const Timer = () => {
    return (
        <>
            <h2 className="timer-title">
                Timer
            </h2>
            <TimerView />
            <hr />
            <TimerViewByClasses />
        </>
    )
};

export default Timer;