import React from 'react';

import '../styles/layout/_players.scss';
import Person from './Person';
import Invite from './Invite';
import {Client} from "@stomp/stompjs";
import {RoomContext} from "./Room";

const client = new Client()

class Players extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: []
        }
    }

    componentDidMount() {
        let room = this.props.context.room
        let task = this.props.context.room.task
        this.setState({players: task.name2votes})

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

        client.activate();
    }

    render() {
        let playersIds = Object.keys(this.state.players).sort();
        return (
            <div className="players">
                <h2 className="players__title">Players</h2>
                <div className="players__person">
                    {
                        playersIds.map((value, i) => {
                            let username = this.state.players[value].username
                            let answered = (this.state.players[value].vote !== null)
                            return <Person key={i} userId={value} username={username} answered={answered}/>
                        })
                    }
                </div>

                <Invite/>
            </div>
        );
    }
}

const PlayersContextWrapper = () => (
    <RoomContext.Consumer>
        {context =>
            <Players context={context}/>
        }
    </RoomContext.Consumer>
)

export default PlayersContextWrapper;