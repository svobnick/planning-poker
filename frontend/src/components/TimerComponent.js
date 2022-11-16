import React, {useEffect, useState} from 'react';

import '../styles/layout/_timer.scss';
import {postRequest} from "../utils/requests";
import {RoomContext} from "./RoomComponent";

const TimerComponent = () => {
    const [roomId, setRoomId] = useState("")
    const [taskId, setTaskId] = useState("")
    const [timerStart, setTimerStart] = useState(0)
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        startTimer()

        let room = this.props.context.room
        let task = this.props.context.room.task
        let showResult = this.props.context.result != null

        setRoomId(room.roomId)
        setTaskId(task.taskId)
        setTimerStart(task.startAt)
        setShowResult(showResult)
    })

    // static getDerivedStateFromProps(nextProps)
    // {
    //     let showResult = nextProps.context.result != null
    //
    //     if (showResult) {
    //         clearInterval(this);
    //         return {
    //             timerTime: 0
    //         };
    //     }
    //
    //     return {
    //         timerOn: !showResult,
    //         showResult: showResult
    //     };
    // }

    const startTimer = (event) => {
        this.setState({
            timerOn: true,
            timerTime: 0,
            timerStart: Date.now()
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart,
                showResult: false
            });
        }, 1000);
    };

    const finishVote = (event) => {
        postRequest("http://localhost:8090/finish/" + this.state.roomId, this.state.taskId.valueOf())
            .then(response => {

            })
        this.setState({
            timerOn: false,
            timerTime: 0,
            timerStart: undefined,
            showResult: true
        });
        clearInterval(this.timer);
    };

    const startVote = (event) => {
        postRequest("http://localhost:8090/start/" + this.state.roomId, this.state.taskId.valueOf())
            .then(response => {

            })
    };

    useEffect(() => {
        const {timerTime} = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let buttonText = this.state.showResult ? "Start" : "Stop"
        let onClick = this.state.showResult ? this.startVote : this.finishVote
    })

    // return (
    //     <div className="timer">
    //         <div className="timer__counter">{minutes}:{seconds}</div>
    //         <button className="timer__button" onClick={onClick}>{buttonText}</button>
    //     </div>
    // );

}

const
    TimerContextWrapper = () => (
        <RoomContext.Consumer>
            {/*{context =>*/}
            {/*    <TimerComponent context={context}/>*/}
            {/*}*/}
        </RoomContext.Consumer>
    )

export default TimerContextWrapper;