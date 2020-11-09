import React from 'react';

import '../styles/layout/_stat.scss';
import '../styles/layout/_result.scss';
import {RoomContext} from "./Room";
import {postRequest} from "../utils/requests";

class Stat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: {
                votes2names: {}
            }
        }

        this.startVote = this.startVote.bind(this)
    }

    componentDidMount() {
        let result = this.props.context.result
        let roomId = this.props.context.room.roomId
        let taskId = this.props.context.room.task.taskId

        this.setState({
            result: result,
            roomId: roomId,
            taskId: taskId
        })
    }

    startVote() {
        postRequest("http://localhost:8090/start/" + this.state.roomId, this.state.taskId.valueOf())
            .then(response => {

            })
    };

    render() {
        let result = this.state.result
        let scores = Object.keys(this.state.result.votes2names)
        let seconds = ("0" + (Math.floor(result.elapsedTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(result.elapsedTime / 60000) % 60)).slice(-2);

        return (
            <div className="stat">
                <h2 className="stat__title">Statistics</h2>
                <div className="stat__data">
                    <div className="stat__data-info">
                        <div className="result">
                            <h4 className="result__title">Average result:</h4>
                            <p className="result__text">{result.average} points</p>
                        </div>
                        <div className="result">
                            <h4 className="result__title">Time:</h4>
                            <p className="result__text">{minutes}:{seconds}</p>
                        </div>
                        <div className="result">
                            <h4 className="result__title">Votes:</h4>
                            <p className="result__text">{result.votesAmount}</p>
                        </div>

                    </div>
                    <div className="stat__data-details">
                        {
                            scores.map((value, i) => {
                                let score = value !== '0.5'
                                    ? Math.round(parseFloat(value)).toString()
                                    : String.fromCharCode("189")
                                let resultRef = "result-" + i
                                let resultScoreRef = "result-score-" + i
                                let resultNamesRef = "result-names-" + i
                                let names = result.votes2names[value].join(", ")
                                return <div className="result" key={resultRef}>
                                    <h4 className="result__title" key={resultScoreRef}>{score}</h4>
                                    <p className="result__text" key={resultNamesRef}>{names}</p>
                                </div>
                            })
                        }
                    </div>
                </div>

                <button className="stat__button" onClick={this.startVote}>Play again</button>

            </div>
        );
    }
}

const StatContextWrapper = () => (
    <RoomContext.Consumer>
        {context =>
            <Stat context={context}/>
        }
    </RoomContext.Consumer>
)

export default StatContextWrapper;