import React from 'react';

import '../styles/layout/_timer.scss';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        };

        this.startTimer()

        this.finishVote = this.finishVote.bind(this)
    }


    startTimer() {
        this.setState({
            timerOn: true,
            timerTime: 0,
            timerStart: Date.now()
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    finishVote() {
        // todo send to server finish event
        this.setState({
            timerOn: false,
            timerTime: 0,
            timerStart: undefined
        });
        clearInterval(this.timer);
    };

    render() {
        const {timerTime} = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

        return (
            <div className="timer">
                <div className="timer__counter">{minutes}:{seconds}</div>
                <button className="timer__button" onClick={this.finishVote}>Stop</button>
            </div>
        );
    }
}

export default Timer;