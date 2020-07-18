import React from 'react';

import '../styles/layout/_stat.scss';
import '../styles/layout/_result.scss';
import {RoomContext} from "./Room";

class Stat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: {
                votes2names: {}
            }
        }
    }

    componentDidMount() {
        let result = this.props.context.result

        this.setState({
            result: result
        })
    }

    render() {
        let result = this.state.result
        let scores = Object.keys(this.state.result.votes2names)

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
                            <p className="result__text">{result.elapsedTime}</p>
                        </div>
                        <div className="result">
                            <h4 className="result__title">Votes:</h4>
                            <p className="result__text">{result.votesAmount}</p>
                        </div>

                    </div>
                    <div className="stat__data-details">
                        {
                            scores.map((value) => {
                                let names = result.votes2names[value].join(", ")
                                return <div className="result">
                                    <h4 className="result__title">{value}</h4>
                                    <p className="result__text">{names}</p>
                                </div>
                            })
                        }
                    </div>
                </div>

                <button className="stat__button">Play again</button>


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