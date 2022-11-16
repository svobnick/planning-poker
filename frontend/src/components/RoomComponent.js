import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';

import Menu from './Menu';
import Task from './TaskComponent';
// import Timer from './TimerComponent';
import Players from './PlayersComponent';
import Card from './CardComponent';
import Nav from "./Nav";
import StatComponent from "./StatComponent";

import '../styles/layout/_poker.scss';
import '../styles/layout/_title.scss';
import '../styles/layout/_content.scss';
import '../styles/layout/_poll.scss';
import '../styles/layout/_unit.scss';

import {getRoomId} from "../utils/url-utils"
import {Client} from "@stomp/stompjs";

export const RoomContext = React.createContext({
    room: {},
    result: null
})

const client = new Client()

const RoomComponent = () => {
    const location = useLocation();
    console.log(location);

    const [roomId, setRoomId] = useState(getRoomId(location.pathname))
    const [room, setRoom] = useState(location.state)
    const [result, setResult] = useState(null)

    if (room !== undefined) {
        localStorage.setItem(roomId, JSON.stringify(room))
    } else {
        setRoom(JSON.parse(localStorage.getItem(roomId)))
    }

    client.configure({
        brokerURL: "ws://localhost:8090/poker",
        onConnect: () => {
            client.subscribe(
                "/task/result/" + room.roomId,
                message => {
                    let resultMessage = JSON.parse(message.body)
                    console.log(resultMessage)
                    setResult(resultMessage)
                }
            )

            client.subscribe(
                "/task/new/" + room.roomId,
                message => {
                    room.task = JSON.parse(message.body)
                    setRoom(room)
                    setResult(null)
                }
            )
        }
    });

    client.activate();


    return (
        <RoomContext.Provider value={room}>
            <div className="poker">
                <Menu/>

                <div className="title">
                    <Task/>
                    {/*<Timer/>*/}
                </div>

                <div className="content">
                    <div className="poll">
                        {
                            result != null ? <StatComponent/> : <Card/>
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

export default RoomComponent;