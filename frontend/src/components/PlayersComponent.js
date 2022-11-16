import React, {useState, useEffect} from 'react';

import '../styles/layout/_players.scss';
import Person from './Person';
import Invite from './InviteComponent';
import {Client} from "@stomp/stompjs";
import {RoomContext} from "./RoomComponent";
import {useLocation} from "react-router-dom";

const client = new Client()

const PlayersComponent = () => {
    const location = useLocation();
    console.log(location);

    const [players, setPlayers] = useState([])
    const [room, setRoom] = useState(null)

    useEffect(() => {
        let room = location.state
        let task = location.state.task
        setPlayers(task.name2votes)

        client.configure({
            brokerURL: "ws://localhost:8090/poker",
            onConnect: () => {
                client.subscribe(
                    "/task/players/" + room.roomId,
                    message => {
                        this.setState({players: JSON.parse(message.body)})
                    },
                    {lol: "kek"}
                )
            }
        });
    });

    client.activate();

    let playersIds = Object.keys(players).sort()
    return (
        <div className="players">
            <h2 className="players__title">Players</h2>
            <div className="players__person">
                {
                    playersIds.map((value, i) => {
                        let username = players[value].username
                        let answered = (players[value].vote !== null)
                        return <Person key={i} userId={value} username={username} answered={answered}/>
                    })
                }
            </div>

            <Invite/>
        </div>
    );
}

const PlayersContextWrapper = () => (
    <RoomContext.Consumer>
        {context =>
            <PlayersComponent context={context}/>
        }
    </RoomContext.Consumer>
)

export default PlayersContextWrapper;