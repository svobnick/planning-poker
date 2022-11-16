import React, {useState, useEffect} from 'react';

import '../styles/layout/_card.scss';
import {postRequest} from "../utils/requests";
import {RoomContext} from "./RoomComponent";
import {useLocation} from "react-router-dom";

const cards = [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55];

const CardComponent = () => {
    const location = useLocation();
    console.log(location);

    const [roomId, setRoomId] = useState(null)
    const [taskId, setTaskId] = useState(null)
    const [userId, setUserId] = useState(null)
    const [username, setUsername] = useState(null)
    const [selectedCard, setSelectedCard] = useState(null)

    const onClickChoice = (i) => {
        setSelectedCard(i)
        postRequest("http://localhost:8090/vote/" + roomId, {
            taskId: taskId,
            userId: userId,
            userName: username,
            vote: cards[i]
        }).then(response => {
            // console.log(response)
        })
    }

    useEffect(() => {
        let room = location.state
        let task = location.state.task

        setRoomId(room.roomId)
        setUserId(room.userId)
        setUsername(task.name2votes[room.userId].username)
        setTaskId(task.taskId)
    })

    return (
        <div className="card__holder">
            {
                cards.map((value, i) => {
                    let cardRef = "card-" + value;
                    let numberRef = "number-" + value;
                    let isSelected = selectedCard === i
                    let finalValue = (i === 0) ? String.fromCharCode("189") : value;
                    return <div className={isSelected ? "card vote-card" : "card"}
                                key={cardRef}
                                onClick={() => onClickChoice(i)}>
                        <p className={isSelected ? "card__number vote-number" : "card__number"}
                           key={numberRef}>{finalValue}</p>
                    </div>
                })
            }
        </div>
    );
}

const CardContextWrapper = () => (
    <RoomContext.Consumer>
        {context =>
            <CardComponent context={context}/>
        }
    </RoomContext.Consumer>
)

export default CardContextWrapper;