import React from 'react';

import '../styles/layout/_timer.scss';

class Timer extends React.Component {
    render() {
        return (
            <div className="timer">
                <div className="timer__counter">01:29</div>
                <button className="timer__button">Stop</button>
            </div>
        );
    }
}

export default Timer;