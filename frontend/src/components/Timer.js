import React from 'react';

import '../styles/layout/_timer.scss';
import {postRequest} from "../utils/requests";
import {RoomContext} from "./Room";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            roomId: null,
            taskId: null,
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        };

        this.finishVote = this.finishVote.bind(this)
    }


    componentDidMount() {
        this.startTimer()

        let room = this.props.context.room
        let task = this.props.context.room.task

        this.setState({
            roomId: room.roomId,
            taskId: task.id
        })
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
        postRequest("http://localhost:8090/finish/" + this.state.roomId, this.state.taskId.valueOf())
            .then(response => {

            })
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

const TimerContextWrapper = () => (
    <RoomContext.Consumer>
        {context =>
            <Timer context={context}/>
        }
    </RoomContext.Consumer>
)

export default TimerContextWrapper;