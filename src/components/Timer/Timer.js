import React from 'react';
import TimerView from './TimerView';

import './Timer.scss';

const Timer = () => {
    return (
        <>
            <h2 className="timer-title">
                Timer
            </h2>
            <TimerView />
        </>
    )
};

export default Timer;