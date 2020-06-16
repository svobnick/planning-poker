import React from 'react';

import '../styles/layout/_timer.scss';

class Timer extends React.Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    startTimer() {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    render() {
        const {timerTime} = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

        return (
            <div className="timer">
                <div className="timer__counter">{minutes}:{seconds}</div>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                    <button className="timer__button" onClick={this.startTimer.bind(this)}>Start</button>
                )}
                {this.state.timerOn === true && (
                    <button className="timer__button" onClick={this.stopTimer.bind(this)}>Stop</button>
                )}
            </div>
        );
    }
}

export default Timer;