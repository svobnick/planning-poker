import React from 'react';

import '../styles/layout/_card.scss';
import {postRequest} from "../utils/requests";
import {RoomContext} from "./Room";

const cards = [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55];

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            roomId: null,
            taskId: null,
            userId: null,
            username: null,
            selectedCard: null
        }

        this.onClickChoice = this.onClickChoice.bind(this);
    }

    onClickChoice(i) {
        this.setState({
            selectedCard: i
        })
        postRequest("http://localhost:8090/vote/" + this.state.roomId, {
            taskId: this.state.taskId,
            userId: this.state.userId,
            userName: this.state.username,
            vote: cards[i]
        }).then(response => {
            // console.log(response)
        })
    }

    componentDidMount() {
        let room = this.props.context.room
        let task = this.props.context.room.task

        this.setState({
            roomId: room.roomId,
            userId: room.userId,
            username: task.name2votes[room.userId].username,
            taskId: task.id,
        })
    }

    render() {
        return (
            <div className="card__holder">
                {
                    cards.map((value, i) => {
                        let cardRef = "card-" + value;
                        let numberRef = "number-" + value;
                        let selected = this.state.selectedCard === i
                        let finalValue = (i === 0) ? String.fromCharCode("189") : value;
                        return <div className={selected ? "card vote-card" : "card"}
                                    key={cardRef}
                                    onClick={() => this.onClickChoice(i)}>
                            <p className={selected ? "card__number vote-number" : "card__number"}
                               key={numberRef}>{finalValue}</p>
                        </div>
                    })
                }
            </div>
        );
    }

}

const CardContextWrapper = () => (
    <RoomContext.Consumer>
        {context =>
            <Card context={context}/>
        }
    </RoomContext.Consumer>
)

export default CardContextWrapper;