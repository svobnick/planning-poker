import React from 'react';

import Menu from './Menu';
import Task from './Task';
import Timer from './Timer';
import Players from './Players';
import Card from './Card';
import Nav from "./Nav";
import Stat from "./Stat";

import '../styles/layout/_poker.scss';
import '../styles/layout/_title.scss';
import '../styles/layout/_content.scss';
import '../styles/layout/_poll.scss';
import '../styles/layout/_unit.scss';

import {getRoomId} from "../utils/url-utils"
import {Client} from "@stomp/stompjs";

export const RoomContext = React.createContext({
    room: {},
    result: null,
    toggleRoom: () => {
    }
})

const client = new Client()

class Room extends React.Component {

    constructor(props) {
        super(props);

        let roomId = getRoomId(window.location.href)
        let room = this.props.location.room;
        if (room !== undefined) {
            localStorage.setItem(roomId, JSON.stringify(room))
        } else {
            room = JSON.parse(localStorage.getItem(roomId))
        }

        this.state = {
            room: room,
            result: null,
        }
    }

    componentDidMount() {
        let room = this.state.room

        client.configure({
            brokerURL: "ws://localhost:8090/poker",
            onConnect: () => {
                client.subscribe(
                    "/task/result/" + room.roomId,
                    message => {
                        this.setState({
                            result: JSON.parse(message.body)
                        })
                    }
                )

                client.subscribe(
                    "/task/new/" + room.roomId,
                    message => {
                        let room = this.state.room;
                        room.task = JSON.parse(message.body)

                        this.setState({
                            room: room,
                            result: null
                        })
                    }
                )
            }
        });

        client.activate();
    }

    render() {
        return (
            <RoomContext.Provider value={this.state}>
                <div className="poker">
                    <Menu/>

                    <div className="title">
                        <Task/>
                        <Timer/>
                    </div>

                    <div className="content">
                        <div className="poll">
                            {
                                this.state.result != null ? <Stat/> : <Card/>
                            }
                        </div>
                        <div className="unit">
                            <Players/>
                            <Nav/>
                        </div>
                    </div>

                </div>
            </RoomContext.Provider>
        );
    }
}

export default Room;